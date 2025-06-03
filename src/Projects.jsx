import Project from "./Project";

const projectData = [
  {
    title: "E-Commerce Website",
    description:
      "Developed a fully functional e-commerce website, closely resembling popular platforms.",
    technologies: ["Css", "Javascript", "NodeJs", "MongoDB", "GSAP"],
    url: "https://overlays.onrender.com/",
    imageSrc:
      "https://res.cloudinary.com/dcen2mnhx/image/upload/v1703653561/eiilnzmhx8zuiyfhdeid.jpg",
  },
  {
    title: "House Rental Website",
    description:
      "Discover a user-friendly platform for house rentals, user interaction, responsive design and efficient data management.",
    technologies: ["Css", "Bootstrap", "NodeJs", "Express", "MongoDB"],
    url: "https://wanderlust-k8cc.onrender.com/",
    imageSrc:
      "https://res.cloudinary.com/dcen2mnhx/image/upload/v1703654110/qogxhpy9m9hqcqdv5lsn.jpg",
  },
  {
    title: "BizBond Website",
    description:
      "Developed a social media platform with user authentication, dynamic posts and profile management using Next.js and Node.js, MongoDB",
    technologies: [
      "NextJs",
      "React",
      "Tailwind",
      "MongoDB",
      "NextAuth",
    ],
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
