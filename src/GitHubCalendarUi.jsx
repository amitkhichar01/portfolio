import { GitHubCalendar } from "react-github-calendar";
import SectionHeading from "./section-heading";

const GitHubCalendarUi = () => {
  return (
    <section className="pt-24 px-2">
      <SectionHeading heading="Development Journey" />
      <div className="flex items-center justify-center">
        <GitHubCalendar username="amitkhichar01" />
      </div>
    </section>
  );
};

export default GitHubCalendarUi;
