import { useEffect, useRef } from "react";

// ─── Tunable constants ────────────────────────────────────────────────────────
/** Grid cell size (px) — controls dot spacing */
const DOT_SPACING = 24;

/** Dot radius in px — controls dot size */
const DOT_RADIUS = 1;

/** Base dot opacity — how dim the static grid is (0–1) */
const BASE_DOT_OPACITY = 0.1;

/** Illuminated dot opacity at the spotlight center (0–1) */
const LIT_DOT_OPACITY = 0.75;

/** Spotlight ellipse horizontal radius in px */
const SPOTLIGHT_RADIUS_X = 200;

/** Spotlight ellipse vertical radius in px (slightly smaller = natural feel) */
const SPOTLIGHT_RADIUS_Y = 170;

/**
 * Lerp factor for cursor position follow (0–1).
 * Lower = more trailing/smooth, higher = snappier.
 */
const LERP_POSITION = 0.072;

/**
 * Lerp factor for opacity fade in/out.
 * Lower = slower fade.
 */
const LERP_OPACITY = 0.055;
// ─────────────────────────────────────────────────────────────────────────────

// Pre-computed CSS strings (computed once, not per render)
const DOT_BG_BASE = `radial-gradient(circle, rgba(255, 255, 255,${BASE_DOT_OPACITY}) ${DOT_RADIUS}px, transparent ${DOT_RADIUS}px)`;
const DOT_BG_LIT = `radial-gradient(circle, rgba(29, 78, 216,${LIT_DOT_OPACITY}) ${DOT_RADIUS}px, transparent ${DOT_RADIUS}px)`;
const DOT_SIZE = `${DOT_SPACING}px ${DOT_SPACING}px`;

// Spotlight mask — uses CSS variables updated directly via JS (no re-render)
const SPOTLIGHT_MASK = `radial-gradient(ellipse ${SPOTLIGHT_RADIUS_X}px ${SPOTLIGHT_RADIUS_Y}px at var(--cx, -9999px) var(--cy, -9999px), black 0%, transparent 100%)`;

// Edge fade — softens the grid at top and bottom edges
const EDGE_FADE = `linear-gradient(to bottom, #000 0%, transparent 10%, transparent 90%, #000 100%)`;

/**
 * DotGridBackground
 *
 * A cursor-reactive dot-grid spotlight effect.
 * Place this as the first child in your root layout so it sits below all content.
 * It is pointer-events:none and does not affect layout or scrolling.
 */
export default function DotGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const litRef = useRef<HTMLDivElement>(null);

  // Animation state stored in refs — never touches React state
  const rafRef = useRef<number>(0);
  const mouse = useRef({ x: 0, y: 0 }); // raw target position
  const rendered = useRef({ x: 0, y: 0 }); // current lerped position
  const opacity = useRef(0); // current lerped opacity
  const targetOpacity = useRef(0); // 0 (cursor out) or 1 (cursor in)

  useEffect(() => {
    // Disable on touch-only devices (no pointer cursor)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const container = containerRef.current;
    const lit = litRef.current;
    if (!container || !lit) return;

    // Write CSS vars directly onto the lit layer element — bypasses React render
    const commitStyles = () => {
      lit.style.setProperty("--cx", `${rendered.current.x}px`);
      lit.style.setProperty("--cy", `${rendered.current.y}px`);
      lit.style.opacity = String(opacity.current);
    };

    const loop = () => {
      // Lerp position
      rendered.current.x +=
        (mouse.current.x - rendered.current.x) * LERP_POSITION;
      rendered.current.y +=
        (mouse.current.y - rendered.current.y) * LERP_POSITION;

      // Lerp opacity
      opacity.current +=
        (targetOpacity.current - opacity.current) * LERP_OPACITY;

      commitStyles();
      rafRef.current = requestAnimationFrame(loop);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      targetOpacity.current = 1;
    };

    const onMouseLeave = () => {
      targetOpacity.current = 0;
    };

    container.addEventListener("mousemove", onMouseMove, { passive: true });
    container.addEventListener("mouseleave", onMouseLeave);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        // pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Layer 1 — Static dim dot grid (always visible) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: DOT_BG_BASE,
          backgroundSize: DOT_SIZE,
        }}
      />

      {/* Layer 2 — Bright dot grid, revealed only under the spotlight mask */}
      <div
        ref={litRef}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: DOT_BG_LIT,
          backgroundSize: DOT_SIZE,
          // Spotlight mask controlled by CSS vars updated via JS
          maskImage: SPOTLIGHT_MASK,
          WebkitMaskImage: SPOTLIGHT_MASK,
          // Initial opacity; controlled directly in the RAF loop
          opacity: 0,
        }}
      />

      {/* Layer 3 — Edge fade so the grid doesn't abruptly cut off */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: EDGE_FADE,
        }}
      />
    </div>
  );
}
