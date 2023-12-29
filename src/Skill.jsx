import PropTypes from "prop-types";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const skillsData = ["Html", "Css", "Bootstrap", "Tailwind", "Javascript", "React.js", "Material UI", "Node.js", "Express", "Ejs (template)", "MongoDB", "Mongoose (Package )", "Git", "GitHub"];

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

const SkillItem = ({ skill, index }) => (
    <motion.li
        className="bg-gray-200 text-gray-800 text-sm py-2 px-3 rounded-md md:text-lg  md:px-5 md:py-3 skill"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={index}
    >
        {skill}
    </motion.li>
);

SkillItem.propTypes = {
    skill: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

const SkillsData = () => (
    <ul className="flex flex-wrap justify-center gap-2">
        {skillsData.map((skill, index) => (
            <SkillItem key={index} skill={skill} index={index} />
        ))}
    </ul>
);

export default function Skill() {
    return (
        <section id="skill" className="flex justify-center flex-col items-center tracking-wider pt-28">
            <div className="scroll-mt-28 max-w-[53rem]">
                <SectionHeading heading="Skills" />
                <SkillsData />
            </div>
        </section>
    );
}
