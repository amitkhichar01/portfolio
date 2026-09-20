import { motion } from "framer-motion";
import { ArrowDown } from "./Icons";

interface ScrollDownIndicatorProps {
  position?: string;
  hiddenOn?: string;
}

export default function ScrollDownIndicator({
  position = "fixed bottom-6 right-1 md:right-8",
  hiddenOn = "",
}: ScrollDownIndicatorProps) {
  return (
    <motion.div
      className={`${position} ${hiddenOn} flex flex-col items-center z-40 w-7 h-7`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* arrow */}
      <motion.div
        animate={{
          y: [0, 12, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-text-primary w-full h-full"
      >
        <ArrowDown />
      </motion.div>
    </motion.div>
  );
}
