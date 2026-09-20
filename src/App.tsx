import { useEffect } from "react";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FocusAreas from "./components/FocusAreas";
import DotGridBackground from "./components/common/DotGridBackground";
import GitHubCalendarUi from "./components/GitHubCalendarUi";
import ScrollDownIndicator from "./components/common/ScrollDownIndicator";
import Footer from "./components/layout/Footer";

const clickSound = new Audio("/click-sound.mp3");

export default function App() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("button, a")) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      {/* Background effect */}
      <DotGridBackground />

      {/* Page content */}
      <div className="relative z-10 max-w-207 mx-auto bg-bg-primary border-x border-dashed border-border">
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Experience />
        <Projects />
        <Skills />
        <GitHubCalendarUi />
        <FocusAreas />
        <Footer />
      </div>

      {/* Scroll down indicator */}
      <ScrollDownIndicator />
    </>
  );
}
