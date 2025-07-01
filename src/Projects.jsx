import Project from "./Project";

const projectData = [
  {
    title: "Visual Designer Portfolio Website",
    description: "Designed and developed a high-performance, visually engaging portfolio website for a visual designer to showcase their creative work.",
    technologies: [
      "NextJs",
      "Tailwind",
      "Framer Motion",
      "Vercel",
    ],
    url: "https://farhanshafik.vercel.app/",
    imageSrc:
      "https://res.cloudinary.com/dcen2mnhx/image/upload/v1751373825/farhanwebsiteimg_almk2e.jpg",
  },
  {
    title: "E-Commerce Website",
    description:
      "Developed a fully functional e-commerce website, closely resembling popular platforms.",
    technologies: ["Css", "Javascript", "NodeJs", "MongoDB", "GSAP"],
    url: "https://overlays.onrender.com/",
    imageSrc:
      "https://res.cloudinary.com/dcen2mnhx/image/upload/v1751374076/overlayswebsite_xe9w2h.jpg",
  },
  {
    title: "House Rental Website",
    description:
      "Discover a user-friendly platform for house rentals, user interaction, responsive design and efficient data management.",
    technologies: ["Css", "Bootstrap", "NodeJs", "Express", "MongoDB"],
    url: "https://wanderlust-k8cc.onrender.com/",
    imageSrc:
      "https://res.cloudinary.com/dcen2mnhx/image/upload/v1751374090/wanderlustwebsite_ufz3v3.jpg",
  },
  {
    title: "BizBond Website",
    description:
      "Developed a social media platform with user authentication, dynamic posts and profile management using Next.js and Node.js, MongoDB",
    technologies: ["NextJs", "React", "Tailwind", "MongoDB", "NextAuth"],
    url: "https://bizbond.vercel.app",
    imageSrc:
      "https://res.cloudinary.com/dcen2mnhx/image/upload/v1751374082/bizbondwebsite_zn5omy.jpg",
  },
];

export default function Projects() {
  return projectData.map((project, index) => (
    <Project key={index} project={project} index={index} />
  ));
}
