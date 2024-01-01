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
export default function about() {
    return (
        <motion.section
            id="about"
            className="flex justify-start items-center flex-col text-center text-base pt-24"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className=" px-2 w-full text-base sm:w-5/6 lg:w-6/12 sm:text-base tracking-wider">
                <SectionHeading heading="About Me" />
                <p className="leading-8  mb-3">
                    Hey! I&apos;m Amit Khichar, a <span className="font-medium">Full stack developer</span>. My favorite part of programming is the problem-solving aspect. I love the feeling of
                    finally figuring out a solution to a problem. I believe in the power of humble beginnings—every project, no matter how grand, starts with a simple line of code. My core stack is{" "}
                    <span className="font-medium">Css, Javascript, React, Node.js, Express.js and MongoDB</span> . I am also familiar with <span className="font-medium">Tailwind</span> and{" "}
                    <span className="font-medium">Bootstrap</span> css framework. I am always looking to learn new technologies. I am currently looking for a{" "}
                    <span className="font-medium">full-time job</span> as a full stack developer.
                </p>

                <p className="tracking-wider leading-8">
                    Whether you&apos;ve got a project in mind or just want to explore the boundless possibilities of tech, I&apos;m all ears. Let&apos;s kick off this coding journey together and
                    create something truly <span className="font-medium"> extraordinary!</span>
                </p>
            </div>
        </motion.section>
    );
}
