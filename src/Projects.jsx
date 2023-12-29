import Project from "./Project";

const projectData = [
    {
        title: "E-Commerce Website",
        description: "I brought the online shopping experience to life by cloning an e-commerce website.",
        technologies: ["Css", "Javascript", "Node.js", "MongoDB"],
        view: "View",
        url: "https://overlays.onrender.com/",
        imageSrc: "https://res.cloudinary.com/dcen2mnhx/image/upload/v1703653561/eiilnzmhx8zuiyfhdeid.jpg",
    },
    {
        title: "House Rental Website",
        description: "Discover a house rental platform clone—prioritizing user interaction, responsive design, and efficient data management.",
        technologies: ["Css", "Bootstrap", "Node.js", "Express", "MongoDB"],
        view: "View",
        url: "https://wanderlust-k8cc.onrender.com/",
        imageSrc: "https://res.cloudinary.com/dcen2mnhx/image/upload/v1703654110/qogxhpy9m9hqcqdv5lsn.jpg",
    },
    {
        title: "Portfolio Website",
        description: "Discover my digital showcase—a canvas where creativity meets code. This responsive portfolio goes beyond showcasing skills.",
        technologies: ["React", "Tailwind CSS", "Vite"],
        view: "View",
        url: "https://wanderlust-k8cc.onrender.com/",
        imageSrc: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function Projects() {
     return projectData.map((project, index) => <Project key={index} project={project} index={index} />);
}