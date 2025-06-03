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
                <div className="text-lg text-start tracking-wider break-normal leading-8 indent-1 px-2 font-normal font-nunito">
                    <p className="text-[#FFFFFFB3] pb-2">
                        Hi, I&#39;m Amit Khichar, a self-taught <span className="text-gray-200">MERN Stack Developer</span> based in Rajasthan, India. With hands-on experience in
                        <span className="text-gray-200"> React, Next.js, Node.js, MongoDB, Postman, </span>
                        I craft scalable solutions that align user needs with business goals.
                    </p>
                    <p className="text-[#FFFFFFB3] pb-2">
                       From responsive frontends to robust backend APIs, I enjoy turning ideas into real-world digital experiences. My ability to rapidly learn new technologies and thrive in dynamic environments helps me contribute effectively to project success.
                    </p>
                    <p className="text-[#FFFFFFB3] pb-2">
                        Whether it&#39;s for a startup, product team or growing organization, I&#39;m excited to work on meaningful projects that make a real impact.
                    </p>
                     <p className="text-[#FFFFFFB3]">
                      Let&#39;s connect and build something that matters.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}
