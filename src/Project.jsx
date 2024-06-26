import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Project = ({ project, index }) => {
    return (
        <>
            <motion.div
                className={`flex bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 ${
                    index === 2 ? "mb-0" : "mb-8"
                } ease-in duration-300`}
            >
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h2 className="text-2xl font-medium text-black font-lexend">{project.title}</h2>
                    <p className="mt-2 leading-relaxed text-gray-700 tracking-wider font-medium font-lato">{project.description}</p>
                    <div className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-[#1d1c20] px-3 py-1 text-[0.8rem] font-lexend tracking-wider text-white rounded-full drop-shadow-[0_1px_1px_rgba(230,230,230)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <img
                            src={project.imageSrc}
                            alt={`Project ${index + 1} worked on`}
                            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl origin-bottom duration-300 hover:-rotate-2 transition-all group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:-right-40 hover:shadow-xl hover:shadow-gray-500"
                        />
                    </a>
                </div>
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -top-5 -right-5  bg-blue-800/[0.9] pt-7 pb-2 pe-8 ps-4 text-[0.8rem] sm:text-lg  tracking-wider text-white rounded-b-lg"
                >
                    {project.view}
                </a>
            </motion.div>
        </>
    );
};

Project.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default Project;
