import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const useAnimation = (offset = ["0 1", "1.33 1"]) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset,
        layoutEffect: false,
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return { ref, scale, opacity };
};

export default useAnimation;
