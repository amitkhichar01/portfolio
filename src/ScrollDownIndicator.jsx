import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";

export default function ScrollDownIndicator({
  position = "absolute bottom-6 right-1 md:right-8",
  hiddenOn = "",
  color = "#FFFFFFB3",
}) {
  return (
    <motion.div
      className={`${position} ${hiddenOn} flex flex-col items-center z-40`}
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
      >
        <FaArrowDownLong className={`w-5 h-5`} style={{ color }} />
      </motion.div>
    </motion.div>
  );
}
