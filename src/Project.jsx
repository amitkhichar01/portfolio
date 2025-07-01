import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useAnimation from "./useAnimation";
import { CiGlobe } from "react-icons/ci";

const Project = ({ project, index }) => {
    const { ref, scale, opacity } = useAnimation(["0 1", "1.33 1"]);
 
    return (
        <>
            <motion.div
                ref={ref}
                style={{
                    scale,
                    opacity,
                }}
                className={`flex max-w-[51rem] border border-[#ffffff26] rounded-lg overflow-hidden sm:pr-8 relative transition sm:group-even:pl-8 ${
                    index === 3 ? "mb-0" : "mb-8"
                } ease-in duration-300`}
            >
                <div className="p-4 sm:pl-7 sm:pr-2 sm:pt-7 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h2 className="text-3xl font-mediu font-lexend">{project.title}</h2>
                    <p className="mt-2 leading-relaxed text-base text-[#FFFFFFB3] tracking-wider font-medium font-lato">{project.description}</p>
                    <div className="flex flex-wrap mt-10 gap-2">
                        {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-4 py-2 text-sm font-lexend tracking-wider rounded-lg bg-[#151515]">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 px-4 pt-2 pb-1 text-sm font-lexend tracking-wider rounded-lg bg-blue-700 hover:bg-blue-800 max-w-fit"
                >
                  <CiGlobe className="inline text-xl mb-0.5"/> <span>Website</span>
                </a>
                </div>
                <div className="">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <img
                            src={project.imageSrc}
                            alt={`Project ${index + 1} worked on`}
                            loading="lazy"
                            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl origin-bottom duration-300 hover:-rotate-2 transition-all group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:-right-40"
                        />
                    </a>
                </div>
            </motion.div>
        </>
    );
};

Project.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default Project;
