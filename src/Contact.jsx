import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.03,
        },
    },
};

export default function Contact() {
    return (
        <>
            <motion.section
                id="contact"
                className="flex justify-start items-center flex-col tracking-wider font-nunito text-lg py-24"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
            >
                <SectionHeading heading="Contact Me" />
                <p className="text-gray500 text-center ">
                    Please contact me directly at -{" "}
                    <a className=" text-blue-400 mx-1 hover:underline" href="mailto:amitkhichar100@gmail.com">
                        amitkhichar100@gmail.com
                    </a>{" "}
                    /{"  "}
                    <a href="https://www.linkedin.com/in/amit-khichar" target="_blank" rel="noreferrer" className=" text-blue-400 ms-1 hover:underline">
                        LinkedIn
                    </a>
                </p>
                <p className="my-2 text-gray00">Or</p>
                <p>Phone No. (+91) 9982208467</p>
            </motion.section>
        </>
    );
}
