import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
    const transition = { duration: 0.7, ease: "easeIn" };

    return (
        <motion.nav className="flex justify-center items-center fixed top-0 w-full z-50" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={transition}>
            <div className="font-lato flex justify-center items-center cursor-pointer rounded-full mt-2 p-1 tracking-wider bg-[#242526] shadow-[0px_0px_5px] shadow-gray-500 sm:gap-4 sm:px-2 sm:py-1">
                <Link to="home" smooth={true} className="relative p-2 text-sm transition-all ease-in duration-500 sm:px-3 sm:py-2 sm:text-base hover:text-gray-500">
                    Home
                </Link>
                <Link to="about" smooth={true} className="relative p-2 text-sm transition-all ease-in duration-500 sm:px-3 sm:py-2 sm:text-base hover:text-gray-500 ">
                    About
                </Link>
                <Link to="project" smooth={true} className="relative p-2 text-sm transition-all ease-in duration-500 sm:px-3 sm:py-2 sm:text-base hover:text-gray-500">
                    Project
                </Link>
                <Link to="skill" smooth={true} className="relative p-2 text-sm transition-all ease-in duration-500 sm:px-3 sm:py-2 sm:text-base hover:text-gray-500">
                    Skill
                </Link>
                <Link to="contact" smooth={true} className="relative p-2 text-sm transition-all ease-in duration-500 sm:px-3 sm:py-2 sm:text-base hover:text-gray-500">
                    Contact
                </Link>
            </div>
        </motion.nav>
    );
}

export default Navbar;
