const stats = [
  { label: "SPEAKERS", value: "30+", color: "border-primary text-primary glow-cyan" },
  { label: "SESSIONS", value: "50+", color: "border-secondary text-secondary glow-green" },
  { label: "TRACKS", value: "4", color: "border-accent text-accent glow-amber" },
  { label: "WORKSHOPS", value: "12", color: "border-primary text-primary glow-cyan" },
  { label: "DAYS", value: "2", color: "border-secondary text-secondary glow-green" },
  { label: "ENGINEERS", value: "500+", color: "border-accent text-accent glow-amber" },
];

const StatsSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <p className="text-xs text-muted-foreground mb-8 tracking-widest">
        // CONFERENCE_SPECS
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`border-l-2 ${s.color.split(" ")[0]} bg-card border border-border p-4`}
          >
            <div className={`text-2xl md:text-3xl font-bold ${s.color.split(" ").slice(1).join(" ")}`}>
              {s.value}
            </div>
            <div className="text-xs text-muted-foreground mt-1 tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
