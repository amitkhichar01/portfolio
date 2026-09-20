import { GitHubCalendar } from "react-github-calendar";

export default function GitHubCalendarUi() {
  return (
    <section id="github-calendar">
      <h2 className="section-heading">GitHub Activity</h2>
      <div className="section-border">
        <GitHubCalendar
          username="amitkhichar01"
          blockSize={12}
          blockMargin={3}
        />
      </div>
    </section>
  );
}
