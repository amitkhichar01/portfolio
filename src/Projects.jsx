import Project from "./Project";

const projectData = [
  {
    title: "Portfolio Website",
    description:
      "Designed and developed a sleek, responsive portfolio website to showcase my client's work and personal brand.",
    technologies: ["React", "Tailwind", "Motion"],
    view: "View",
    url: "https://vinaychahal.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/dcen2mnhx/image/upload/v1741358314/image_vfomas.jpg",
  },
  {
    title: "E-Commerce Website",
    description:
      "I developed an e-commerce clone project to simulate the online shopping experience.",
    technologies: ["Css", "Javascript", "NodeJs", "MongoDB", "GSAP"],
    view: "View",
    url: "https://overlays.onrender.com/",
    imageSrc:
      "https://res.cloudinary.com/dcen2mnhx/image/upload/v1703653561/eiilnzmhx8zuiyfhdeid.jpg",
  },
  {
    title: "House Rental Website",
    description:
      "Discover a house rental platform clone—prioritizing user interaction, responsive design, and efficient data management.",
    technologies: ["Css", "Bootstrap", "NodeJs", "Express", "MongoDB"],
    view: "View",
    url: "https://wanderlust-k8cc.onrender.com/",
    imageSrc:
      "https://res.cloudinary.com/dcen2mnhx/image/upload/v1703654110/qogxhpy9m9hqcqdv5lsn.jpg",
  },
  {
    title: "BizBond Website",
    description:
      "Developed a LinkedIn clone with user authentication, dynamic posts, and profile management using Next.js and Tailwind CSS",
    technologies: [
      "NextJs",
      "React",
      "Tailwind",
      "MongoDB",
      "NextAuth",
    ],
    view: "View",
    url: "https://bizbond.vercel.app",
    imageSrc:
      "https://res.cloudinary.com/dcen2mnhx/image/upload/v1719374605/bizbond_mh9bwp.jpg",
  },
];

export default function Projects() {
  return projectData.map((project, index) => (
    <Project key={index} project={project} index={index} />
  ));
}
