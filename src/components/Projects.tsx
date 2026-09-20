import { ChevronDown, ExtrnalLink, PrivateRegister } from "./common/Icons";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  liveUrl: string;
  tech: string[];
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: "meknos",
    title: "Meknos",
    subtitle: "Your professional profile, but actually interactive.",

    image: "meknos-project.png",
    liveUrl: "https://meknos.amitkhichar.in",
    tech: [
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Zod",
      "Gemini LLM",
      "Cashfree",
      "Vercel",
    ],
    description:
      "Meknos brings your experience, skills, projects, services and achievements together in one place. Instead of making people scroll through a static portfolio, visitors can ask questions to get answers about you and what you do.",
  },
  {
    id: "visual-designer-portfolio",
    title: "Visual Designer Portfolio",
    subtitle: "A portfolio designed to make creative work stand out.",
    image: "farhan-project.png",
    liveUrl: "https://farhanshafik.vercel.app",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Motion",
      "Lenis",
      "Cloudinary",
      "Vercel",
    ],
    description:
      "Built a modern portfolio for a visual designer to showcase their work through a more interactive experience. Smooth animations, scrolling and optimized images keep the site feeling polished while making sure the work stays the main focus.",
  },
];

const hideSound = new Audio("/hide-sound.mp3");

export default function Projects() {
  const playSound = () => {
    hideSound.currentTime = 0;
    hideSound.play().catch(() => {});
  };
  return (
    <section id="my-work">
      <h2 className="section-heading">My Work</h2>

      <div className="flex flex-col">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="section-border flex flex-col sm:flex-row gap-3"
          >
            {/* Left */}
            <div className="relative flex-shrink-0 w-full sm:w-68 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 sm:h-full object-cover rounded-md"
              />
            </div>

            {/* Right */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-medium text-text-primary leading-snug">
                    {project.title}
                    <span
                      className="relative inline-block group align-middle ml-1 mb-1"
                      onMouseEnter={() => {
                        playSound();
                      }}
                    >
                      <PrivateRegister
                        className="text-success inline-block cursor-pointer"
                        size={15}
                      />
                      <span
                        role="tooltip"
                        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max rounded-md bg-bg-inverse px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50"
                      >
                        <span className="block text-xs font-medium text-red-600 mb-0.5 mx-auto text-center">
                          Private Project
                        </span>
                        <span className="block text-xs text-text-inverse/80 text-center leading-snug">
                          Source code isn't publicly available.
                        </span>

                        <ChevronDown
                          className="text-text-primary absolute -bottom-1.5 left-1/2 opacity-60"
                          size={12}
                        />
                      </span>
                    </span>
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {project.subtitle}
                  </p>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 border border-border text-text-inverse bg-bg-inverse text-xs px-3 py-1.5 rounded-sm backdrop-blur-sm text-nowrap"
                >
                  Visit website
                  <ExtrnalLink size={12} />
                </a>
              </div>

              <p className="text-sm text-text-secondary">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-text-secondary border border-dotted border-border rounded-sm px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
