import { Link } from "react-scroll";
import clsx from "clsx";
import { motion } from "framer-motion";

const links = ["Home", "About", "Project", "Skill", "Contact"];

const NavbarLink = ({ activeSection, handleLinkClick }) => {
    return links.map((link, index) => (
        <Link
            key={index}
            to={link.toLowerCase()}
            smooth={true}
            duration={500}
            className={clsx("relative p-2 text-xs transition-all ease-in opacity-80 sm:px-3 sm:py-2 sm:text-base text-gray-700", { "text-gray-950": activeSection === link })}
            onClick={() => handleLinkClick(link)}
        >
            {link}
            {link === activeSection && (
                <motion.span
                    className="bg-gray-300 rounded-full absolute inset-0 w-full -z-10"
                    layoutId="activeSection"
                    transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 30,
                    }}
                ></motion.span>
            )}
        </Link>
    ));
};

export default NavbarLink;
