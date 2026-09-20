interface ExperienceItem {
  company: string;
  role: string;
  period: string;
}

const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    company: "Clienzon",
    role: "Full Stack Intern — 1 Year",
    period: "Jul, 2025 – Jul, 2026",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-heading">Experience</h2>

      <ul className="flex flex-col gap-4">
        {EXPERIENCE_LIST.map((item) => (
          <li
            key={item.company}
            className="section-border flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between pb-8"
          >
            <div className="flex flex-col gap-1">
              <span className="text-base font-medium text-text-primary">
                {item.company}
              </span>
              <span className="text-sm text-text-secondary">{item.role}</span>
            </div>
            <span className="text-sm text-text-secondary whitespace-nowrap">
              {item.period}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
