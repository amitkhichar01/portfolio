import "./App.css";
// import Navbar from "./navbar.jsx";
import Hero from "./hero.jsx";
import SectionDivider from "./section-divider.jsx";
import About from "./About.jsx";
import ProjectSection from "./ProjectSection .jsx";
import Skill from "./Skill.jsx";
import Contact from "./Contact.jsx";
import GitHubCalendarUi from "./GitHubCalendarUi.jsx";

export default function App() {
  return (
    <>
      {/* <header>
        <Navbar />
      </header> */}

      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <ProjectSection />
        <SectionDivider />
        <GitHubCalendarUi />
        <SectionDivider />
        <Skill />
        <SectionDivider />
        <Contact />
      </main>
    </>
  );
}
