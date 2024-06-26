import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const Layout = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            el: scrollRef.current,
            smooth: true,
            smoothTouch: true,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            if (lenis) lenis.destroy();
        };
    }, []);

    return <div ref={scrollRef}>{children}</div>;
};

export default Layout;
