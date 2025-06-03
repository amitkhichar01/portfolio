import "./hero.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function hero() {
    const transition = { duration: 0.7, ease: "easeIn" };
    return (
        <motion.section
            id="home"
            className="pt-36 flex flex-row justify-center items-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={transition}
            whileInView={{ opacity: 1 }}
        >
            <div className="flex justify-center items-center flex-col tracking-wider">
                <h1 className="text-4xl font-medium tracking-wide mb-8 sm:text-5xl text-center  font-lato">Hey, I&#39;m Amit khichar</h1>
                <h2 className="magic-text headline font-nunito text-2xl font-bold mb-4 sm:text-3xl tracking-wider text-center">MERN Stack Developer</h2>
                <p className="font-nunito my-4 px-2 w-full text-lg text-[#FFFFFFB3] leading-8 tracking-wider text-center sm:w-5/6 lg:w-7/12 xl:w-2/5">
                I focus on turning ideas into fast, scalable and user-centered web applications. I build clean, efficient solutions that balance performance with meaningful experiences. My goal is to create technology that solves problems and drives real impact. Let&#39;s build something that matters.
                </p>
                <div className="mt-5 flex justify-center items-center flex-col gap-8 sm:flex-row font-lexend">
                    <Link to="contact" smooth={true} duration={800} className="rounded-full bg-blue-700 hover:bg-blue-800 py-2 px-6 cursor-pointer transition-all duration-300 ease-in">
                        <span>Contact Me</span> <BsArrowRight className="inline"/>
                    </Link>
                    <a
                        id="downloadBtn"
                        href="https://drive.google.com/file/d/1iYfFJe96JpPOXXliNd4_-ljcHFecoX8F/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        download="Amit-Resume.pdf"
                        className="rounded-full bg-[#202020] hover:bg-[#151515] py-2 px-6 cursor-pointer transition-all duration-500 ease-in"
                    >
                        <span>Download CV</span> <BsFillCloudArrowDownFill className="inline text-xl"/>
                    </a>
                    <a href="https://github.com/amitkhichar01" target="blank">
                        <i
                            id="githubIcon"
                            className="fa-brands fa-github  fa-2xl rounded-full p-2 border-2 border-[#101010] hover:border-[#505050]  bg-[#151515] py-5 px-1 cursor-pointer transition-all duration-300 ease-in"
                        ></i>
                    </a>
                </div>
            </div>
        </motion.section>
    );
}

export default hero;
