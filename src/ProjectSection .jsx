import SectionHeading from "./section-heading.jsx";
import Projects from "./Projects.jsx";

const ProjectSection = () => {
    return (
        <section id="project" className="project-section flex justify-center items-center flex-col mx-2 pt-24">
            <SectionHeading heading="My Projects" />
            <Projects />
        </section>
    );
};

export default ProjectSection;
