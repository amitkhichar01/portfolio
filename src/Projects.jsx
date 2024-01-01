import Project from "./Project";

const projectData = [
    {
        title: "E-Commerce Website",
        description: "I brought the online shopping experience to life by cloning an e-commerce website.",
        technologies: ["Css", "Javascript", "Node.js", "MongoDB", "GSAP"],
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
        technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        view: "View",
        url: "https://amitportfolio.onrender.com/",
        imageSrc: "https://res.cloudinary.com/dcen2mnhx/image/upload/v1704083684/gntwgngeqmiqfaihbqsw.jpg",
    },
];

export default function Projects() {
     return projectData.map((project, index) => <Project key={index} project={project} index={index} />);
}