import Project from "./Project";

const projectData = [
    {
        title: "E-Commerce Website",
        description: "I developed an e-commerce clone project to simulate the online shopping experience.",
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
        title: "BizBond Website",
        description: "Developed a LinkedIn clone with user authentication, dynamic posts, and profile management using Next.js and Tailwind CSS",
        technologies: ["Next.js", "react.js", "Tailwind Css", "MongoDB", "NextAuth"],
        view: "View",
        url: "https://bizbond.vercel.app",
        imageSrc: "https://res.cloudinary.com/dcen2mnhx/image/upload/v1719374605/bizbond_mh9bwp.jpg",
    },
];

export default function Projects() {
    return projectData.map((project, index) => <Project key={index} project={project} index={index} />);
}
