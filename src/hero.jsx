import "./hero.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import SectionHeading from "./section-heading";

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
                <SectionHeading heading="Hey, I'm Amit khichar" />
                <h3 className="headline text-xl font-normal mb-4 sm:text-2xl">
                    <span className="magic-text">Full Stack Developer</span>
                </h3>
                <p className="px-1 my-4 w-full text-base leading-8 text-center sm:w-5/6 lg:w-7/12 xl:w-2/5">
                    Your friendly Full Stack Developer on a mission to turn your digital dreams into reality. Whether it&apos;s creating stunning websites or building robust backend systems, I&apos;m
                    here to make the web work for you. Let&apos;s bring your ideas to life in the digital realm!
                </p>
                <div className="mt-4 flex justify-center items-center flex-col gap-8 sm:flex-row ">
                    <Link
                        to="contact"
                        smooth={true}
                        duration={800}
                        className="rounded-full bg-blue-300 py-2 px-6 shadow-sm shadow-black cursor-pointer hover:shadow transition-all duration-300 ease-in"
                    >
                        Contact Me
                    </Link>
                    <a
                        id="downloadBtn"
                        href="https://drive.google.com/u/0/uc?id=1fFiT-bvXzhbufQlzmKwG9b4oyOWnFTIV&export=download"
                        download="Amit-Resume.pdf"
                        className="rounded-full bg-gray-200 py-2 px-6 shadow-sm shadow-gray-600 scale-90 cursor-pointer hover:shadow transition-all duration-300 ease-in"
                    >
                        Download CV <i className="fa-solid fa-cloud-arrow-down"></i>
                    </a>
                    <a href="https://github.com/amitkhichar01" target="blank">
                        <i
                            id="githubIcon"
                            className="fa-brands fa-github  fa-2xl rounded-full bg-gray-200 py-5 px-1 shadow-sm shadow-gray-600 scale-90 cursor-pointer hover:shadow transition-all duration-300 ease-in"
                        ></i>
                    </a>
                </div>
            </div>
        </motion.section>
    );
}

export default hero;
