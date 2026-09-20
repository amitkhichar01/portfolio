const NAV_LINKS = [
  { label: "About me", href: "#about" },
  { label: "My Work", href: "#my-work" },
  { label: "Skills", href: "#skill" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row gap-3 items-center justify-between section-border">
      <span className="text-text-primary text-base font-medium">
        Amit Khichar
      </span>
      <ul className="flex items-center gap-6">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="text-text-secondary text-sm hover:text-text-primary transition-all duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
