import { motion } from "framer-motion";
import { useMemo } from "react";

interface InfraGridProps {
  className?: string;
  gridGap?: number;
  beamCount?: number;
  beamLength?: string;
  beamColor?: string;
}

const InfraGrid = ({
  className = "",
  gridGap = 8,
  beamCount = 18,
  beamLength = "45%",
  beamColor = "var(--color-text-primary)",
}: InfraGridProps) => {
  const beams = useMemo(
    () =>
      Array.from({ length: beamCount }, (_, index) => ({
        id: index,
        left: `${Math.floor(Math.random() * 100)}%`,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 3,
        height: 0.5 + Math.random() * 0.5,
      })),
    [beamCount],
  );

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden text-border/50 [mask-image:linear-gradient(to_bottom,black,transparent_50%)] ${className}`}
      style={
        {
          "--infra-grid-gap": `${gridGap}px`,
          "--infra-grid-beam-color": beamColor,
          "--infra-grid-beam-length": beamLength,
        } as React.CSSProperties
      }
    >
      {/* Grid */}
      <div
        className="size-full bg-center bg-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent calc(50% - 0.5px), currentColor calc(50% - 0.5px) calc(50% + 0.5px), transparent calc(50% + 0.5px))",
          backgroundSize: "25px 100%",
        }}
      />

      {/* Animated beams */}
      <div className="absolute inset-0 overflow-hidden">
        {beams.map((beam) => (
          <motion.div
            key={beam.id}
            className="absolute top-0 w-px origin-top bg-linear-to-b from-transparent via-blue-500 to-transparent will-change-transform"
            style={{
              left: beam.left,
              height: beam.height,
            }}
            initial={{
              opacity: 0,
              y: "-100%",
              scaleY: beam.height,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: ["-100%", "200%"],
              scaleY: [beam.height, 1, beam.height],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, color-mix(in srgb, var(--color-bg-secondary) 0%, transparent), transparent 85%)",
        }}
      />
    </div>
  );
};

export default InfraGrid;
