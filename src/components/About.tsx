export default function About() {
  return (
    <section id="about">
      <h2 className="section-heading">About</h2>

      <ul className="flex flex-col gap-4 list-none section-border text-base text-text-secondary leading-relaxed">
        <li className="flex gap-2 items-start">
          <span className="mt-1 select-none">•</span>
          <p>
            I'm a <span className="text-text-primary">Full-Stack AI Engineer</span> who started with MERN and learned by
            building things end to end. Over time, I became more curious about
            what's actually worth building, who it helps and how to turn an idea
            into something real.
          </p>
        </li>
        <li className="flex gap-2 items-start">
          <span className="mt-1 select-none">•</span>
          <p>
            That curiosity led me into <span className="text-text-primary">GenAI</span>. Now I enjoy building AI-powered
            products, experimenting with LLMs and working across the stack to
            ship things people can actually use.
          </p>
        </li>
        <li className="flex gap-2 items-start">
          <span className="mt-1 select-none">•</span>
          <p>
            I've completed <span className="text-text-primary">1 internship</span> and shipped <span className="text-text-primary">5+ products</span> to production.
            Still figuring things out, still building and probably always will
            be.
          </p>
        </li>
      </ul>
    </section>
  );
}
