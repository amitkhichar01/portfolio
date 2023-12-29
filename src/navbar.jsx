import { useState } from "react";
import { motion } from "framer-motion";
import NavbarLink from "./NavbarLink";

function Navbar() {
    const [activeSection, setActiveSection] = useState("Home");

    const handleLinkClick = (link) => {
        setActiveSection(link);
    };
    const transition = { duration: 0.7, ease: "easeIn" };

    return (
        <motion.nav className="flex justify-center items-center fixed top-0 w-full z-50" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={transition}>
            <div className="flex justify-center items-center cursor-pointer bg-gray-200 rounded-full mt-2 p-1 tracking-wider shadow-[0px_0px_5px] shadow-gray-400 sm:gap-4 sm:px-2 sm:py-1">
                <NavbarLink activeSection={activeSection} handleLinkClick={handleLinkClick} />
            </div>
        </motion.nav>
    );
}

export default Navbar;
