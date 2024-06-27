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
                <div className="text-lg text-start tracking-wider break-all leading-8 indent-5 px-2 font-normal font-nunito">
                    <p className="text-gray-400 pb-2">
                        Hello, I&#39;m Amit Khichar, a motivated <span className="text-gray-200">MERN Stack Developer</span> based in Rajasthan. With expertise in{" "}
                        <span className="text-gray-200">Tailwind Css, React.js, Next.js, Node.js, MongoDB, </span>
                        and <span className="text-gray-200">responsive UI/UX design.</span> I excel at solving complex problems and bringing ideas to life through code.
                    </p>
                    <p className="text-gray-400 pb-2">
                        I&#39;m eager to launch my career in web development, <span className="text-gray-200">seeking roles in full-time positions, internships, or team projects.</span> My ability to
                        rapidly learn new technologies and thrive in dynamic environments ensures I contribute effectively to project success.
                    </p>
                    <p className="text-gray-400">
                        Let&#39;s connect to discuss how my skills and passion for web development can support your team&#39;s goals. I&#39;m excited to learn, grow, and make a meaningful impact in
                        the tech industry.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}
