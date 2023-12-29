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
            <motion.section id="contact" className="flex justify-start items-center flex-col my-24 tracking-wider" variants={fadeInAnimationVariants} initial="initial" whileInView="animate">
               <SectionHeading heading="Contact Me" />
                <p className="text-gray-700 text-center">
                    Please contact me directly at{" "}
                    <a className="underline text-black ms-1" href="mailto:amitkhichar100@gmail.com">
                        amitkhichar100@gmail.com
                    </a>
                </p>
                <p className="my-2">Or</p>
                <p>Phone No. 7014527032</p>
            </motion.section>
        </>
    );
}
