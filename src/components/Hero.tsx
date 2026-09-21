import { useState } from "react";
import { ChevronDown, ExtrnalLink } from "./common/Icons";

const hideSound = new Audio("/hide-sound.mp3");

export default function Hero() {
  const [mapHover, setMapHover] = useState(false);
  const playSound = () => {
    hideSound.currentTime = 0;
    hideSound.play().catch(() => {});
  };
  return (
    <section className="overflow-hidden">
      {/* Banner image */}
      <div className="relative section-border">
        <img
          src="/banner image.jpg"
          alt="banner image"
          fetchPriority="high"
          decoding="async"
          className="object-cover w-full h-60 rounded-sm"
        />

        <div className="absolute right-7 top-4 flex items-center gap-1.5 rounded-full border border-border bg-bg-primary px-2.5 py-1 text-[10px] text-text-secondary backdrop-blur-sm shadow-inner shadow-border">
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse"></span>
          I'm open to work
        </div>
      </div>

      <div className="relative flex items-start justify-start gap-2 section-border">
        {/* Photo wrapper */}
        <div className="p-1 bg-bg-secondary border border-border rounded-xl">
          <img
            src="/my-photo.jpg"
            alt="Amit Khichar"
            fetchPriority="high"
            decoding="async"
            className="rounded-lg object-cover shadow w-30 h-30"
          />
        </div>

        <div>
          <h1 className="text-4xl font-semibold">Amit Khichar</h1>

          <p className="text-base text-text-secondary uppercase">
            Full Stack AI Engineer
          </p>

          {/* Location — tooltip + Google Maps link */}
          <a
            href="https://maps.google.com/?q=Jhunjhunu,Rajasthan,India"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-1 font-kalam text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
            onMouseEnter={() => {
              setMapHover(true);
              playSound();
            }}
            onMouseLeave={() => setMapHover(false)}
          >
            Rajasthan, India
            <ExtrnalLink size={12} />
            {/* Tooltip */}
            <span
              style={{
                position: "absolute",
                bottom: "calc(100% + 8px)",
                left: "70%",
                transform: `translateX(-50%) translateY(${mapHover ? "0px" : "4px"})`,
                opacity: mapHover ? 1 : 0,
                pointerEvents: "none",
                transition: "opacity 0.18s ease, transform 0.18s ease",
                whiteSpace: "nowrap",
              }}
              className="flex relative items-center gap-1.5 bg-bg-primary font-dmSans backdrop-blur-2xl border border-border text-text-primary text-xs px-2.5 py-1.5 rounded-md shadow-lg"
            >
              View in Google Maps
              <ChevronDown
                className="text-text-primary absolute -bottom-1.5 left-1/2 opacity-60"
                size={12}
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
