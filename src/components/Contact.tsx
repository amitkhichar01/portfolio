import {
  GithubIcon,
  LinkedinIcon,
  ResumeIcon,
  TwitterXIcon,
  MailIcon,
} from "./common/Icons";

interface ContactLink {
  label: string;
  href: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/amitkhichar01",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "http://www.linkedin.com/in/amit-khichar",
    Icon: LinkedinIcon,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/amit_khichar25",
    Icon: TwitterXIcon,
  },
  {
    label: "Mail",
    href: "mailto:amitkhichar70@gmail.com",
    Icon: MailIcon,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1EI6COG18ldBG3gdoELMOfZGgs0TA8Uxr/view?usp=sharing",
    Icon: ResumeIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-heading">Contact</h2>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 section-border">
        {CONTACT_LINKS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center justify-center gap-2 section-border border-x border-y border-dashed text-text-secondary text-sm hover:text-text-primary transition-all duration-300 w-full"
          >
            <Icon size={18} />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
