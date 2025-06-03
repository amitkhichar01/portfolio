import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function SectionDivider() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "start 50%"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Height grows from 0% to 100%
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="flex justify-center items-center mt-24 h-24">
      <div className="relative w-1 h-full bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          style={{ height }}
          className="absolute top-0 left-0 right-0 bg-white rounded-full"
        />
      </div>
    </div>
  );
}
