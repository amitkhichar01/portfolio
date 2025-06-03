import PropTypes from "prop-types";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiEjs,
  SiPostman,
  SiTrello,
} from "react-icons/si";
import { RiShieldUserFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";


const frontendSkills = [
  { name: "Html", icon: <FaHtml5 className="text-xl" style={{ fill: '#e34c26' }} /> },
  { name: "Css", icon: <FaCss3Alt className="text-xl" style={{ fill: '#264de4' }} /> },
  { name: "Javascript", icon: <SiJavascript className="text-xl" style={{ fill: '#f7df1e' }} /> },
  { name: "React", icon: <FaReact className="text-xl" style={{ fill: '#61DBFB' }} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-xl" style={{ fill: '#ffffff' }} /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-xl" style={{ fill: '#7952b3' }} /> },
  { name: "Tailwind Css", icon: <SiTailwindcss className="text-xl" style={{ fill: '#38bdf8' }} /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-xl" style={{ fill: '#3c873a' }} /> },
  { name: "Express", icon: <SiExpress className="text-xl" style={{ fill: '#888888' }} /> },
  { name: "Ejs (template)", icon: <SiEjs className="text-xl" style={{ fill: '#a91e50' }} /> },
  { name: "NextAuth", icon: <RiShieldUserFill className="text-xl" style={{ fill: '#888888' }} /> },
   { name: "Mongoose", icon: <SiMongoose className="text-xl" style={{ fill: '#880000' }} /> },
];

const databases = [
  { name: "MongoDB", icon: <SiMongodb className="text-xl" style={{ fill: '#47A248' }} /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt className="text-xl" style={{ fill: '#f34f29' }} /> },
  { name: "GitHub", icon: <FaGithub className="text-xl" style={{ fill: '#888888' }} /> },
  { name: "VS Code", icon: <VscVscode className="text-xl" style={{ fill: '#007acc' }} /> },
   { name: "Postman", icon: <SiPostman className="text-xl" style={{ fill: '#ff6c37' }} /> },
   { name: "Trello", icon: <SiTrello className="text-xl" style={{ fill: '#0079bf' }} /> },
];

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
    className="bg-[#151515] flex flex-row items-center gap-2 text-sm py-2 px-3 rounded-lg md:text-lg  md:px-5 md:py-3 skill font-nunito font-semibold"
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    custom={index}
  >
    <span>{skill.icon}</span>
    <span>{skill.name}</span>
  </motion.li>
);

SkillItem.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.node,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const SkillsData = () => (
  <ul className="flex flex-col flex-wrap justify-center items-start gap-2 sm:ml-5 md:ml-12 lg:ml-24">
    <div className="mt-10">
      <h4 className="mb-3 text-2xl">FrontEnd</h4>
      <div className="flex flex-row items-center gap-2 flex-wrap ml-2">
        {frontendSkills.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
    <div className="mt-10">
      <h4 className="mb-3 text-2xl">BackEnd</h4>
      <div className="flex flex-row items-center gap-2 flex-wrap ml-2">
        {backendSkills.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
    <div className="mt-10">
      <h4 className="mb-3 text-2xl">Database</h4>
      <div className="flex flex-row items-center gap-2 flex-wrap ml-2">
        {databases.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
    <div className="mt-10">
      <h4 className="mb-3 text-2xl">Tools & platforms</h4>
      <div className="flex flex-row items-center gap-2 flex-wrap ml-2">
        {tools.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </div>
    </div>
  </ul>
);

export default function Skill() {
  return (
    <section
      id="skill"
      className="flex justify-center flex-col items-center tracking-wider pt-24 px-2"
    >
      <div className="scroll-mt-28 max-w-[53rem]">
        <SectionHeading heading="Skills" />
        <SkillsData />
      </div>
    </section>
  );
}
