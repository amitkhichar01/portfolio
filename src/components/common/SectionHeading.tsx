import { CornerMark } from "./Icons";

export default function SectionHeading({
  heading,
  relative = true,
}: {
  heading: string;
  relative?: boolean;
}) {
  return (
    <div className={`${relative ? "relative" : ""} block`}>
      {/* Top Left */}
      <span className="absolute -top-1 -left-1 text-xs rotate- w-5 h-5 text-text-primary/50">
        <CornerMark />
      </span>

      {/* Top Right */}
      <span className="absolute -top-1 -right-1 text-xs rotate-90 w-5 h-5 text-text-primary/50">
        <CornerMark />
      </span>

      {/* Heading */}
      <h2 className="section-heading">{heading}</h2>

      {/* Bottom Left */}
      <span className="absolute -bottom-1 -left-1 text-xs rotate-270 w-5 h-5 text-text-primary/50">
        <CornerMark />
      </span>

      {/* Bottom Right */}
      <span className="absolute -bottom-1 -right-1 text-xs rotate-180 w-5 h-5 text-text-primary/50">
        <CornerMark />
      </span>
    </div>
  );
}
