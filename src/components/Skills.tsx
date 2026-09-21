import { useState } from "react";

type FilterCategory =
  | "all"
  | "frontend"
  | "backend"
  | "design"
  | "tools"
  | "llm";

interface Skill {
  name: string;
  icon: string; // devicon icon name segment
  category: Exclude<FilterCategory, "all">;
}

// Icon name uses the devicon URL pattern:
// https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/[icon]/[icon]-original.svg
const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML", icon: "html5/html5-original.svg", category: "frontend" },
  { name: "CSS", icon: "css3/css3-original.svg", category: "frontend" },
  {
    name: "JavaScript",
    icon: "javascript/javascript-original.svg",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "typescript/typescript-original.svg",
    category: "frontend",
  },
  { name: "React.js", icon: "react/react-original.svg", category: "frontend" },
  { name: "Next.js", icon: "nextjs/nextjs-original.svg", category: "frontend" },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss/tailwindcss-original.svg",
    category: "frontend",
  },
  { name: "Redux", icon: "redux/redux-original.svg", category: "frontend" },
  { name: "GSAP", icon: "gsap/gsap-original.svg", category: "frontend" },
  {
    name: "Framer Motion",
    icon: "framermotion/framermotion-original.svg",
    category: "frontend",
  },
  // Backend
  { name: "Node.js", icon: "nodejs/nodejs-original.svg", category: "backend" },
  {
    name: "Express.js",
    icon: "express/express-original.svg",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: "mongodb/mongodb-original.svg",
    category: "backend",
  },
  {
    name: "Mongoose",
    icon: "mongoose/mongoose-original.svg",
    category: "backend",
  },
  { name: "Zod", icon: "", category: "backend" },
  // LLM / AI
  {
    name: "Generative AI",
    icon: "",
    category: "llm",
  },
  { name: "Gemini", icon: "google/google-original.svg", category: "llm" },
  { name: "Claude", icon: "", category: "llm" },
  { name: "OpenAI GPT", icon: "", category: "llm" },
  // Cloud & DevOps (tools)
  {
    name: "AWS",
    icon: "amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "tools",
  },
  { name: "Vercel", icon: "vercel/vercel-original.svg", category: "tools" },
  {
    name: "CI/CD",
    icon: "githubactions/githubactions-original.svg",
    category: "tools",
  },
  // Payments & Tools
  {
    name: "Razorpay",
    icon: "",
    category: "tools",
  },
  {
    name: "Cashfree",
    icon: "",
    category: "tools",
  },
  { name: "Git", icon: "git/git-original.svg", category: "tools" },
  { name: "GitHub", icon: "github/github-original.svg", category: "tools" },
  { name: "Postman", icon: "postman/postman-original.svg", category: "tools" },
  { name: "npm", icon: "npm/npm-original-wordmark.svg", category: "tools" },
  { name: "VS Code", icon: "vscode/vscode-original.svg", category: "tools" },
  // Design
  { name: "Figma", icon: "figma/figma-original.svg", category: "design" },
  {
    name: "Google Sticky",
    icon: "google/google-original.svg",
    category: "design",
  },
];

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const FILTER_BUTTONS: { label: string; value: FilterCategory }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "LLM", value: "llm" },
  { label: "Design", value: "design" },
  { label: "Tools", value: "tools" },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredSkills =
    activeFilter === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeFilter);

  return (
    <section id="skill">
      <div className="section-border flex flex-col sm:flex-row gap-3 justify-between items-center">
        <h2 className="section-heading border-none! p-0!">Skills</h2>

        {/* Filter buttons */}
        <div className="flex justify-start sm:justify-end flex-wrap gap-1 sm:gap-2 flex-1">
          {FILTER_BUTTONS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`text-sm px-3 py-1 rounded-sm shadow-inner shadow-border border border-solid border-border cursor-pointer ${
                activeFilter === value
                  ? "text-text-primary"
                  : "text-text-secondary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills grid */}
      <div className="flex content-start justify-start flex-wrap gap-2 section-border overflow-scroll md:overflow-hidden h-[400px] md:h-[166px]">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-1.5 border border-dashed border-border rounded-sm p-1 text-text-secondary text-sm transition-all duration-300 hover:text-text-primary"
          >
            <img
              src={`${DEVICON_BASE}/${skill.icon}`}
              alt={skill.name}
              width={16}
              height={16}
              decoding="async"
              loading="lazy"
              className="rounded-sm"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
