export default function Footer() {
  return (
    <div className="section-border text-text-secondary flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 flex-wrap text-xs">
      <p>© {new Date().getFullYear()} All rights reserved.</p>
      <p>
        Designed & Developed by <span className="text-text-primary">Amit</span>
      </p>
    </div>
  );
}
