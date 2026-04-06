const speakers = [
  { name: "Dr. Sarah Chen", title: "Chief AI Architect", company: "AutoGen Labs", tag: "KEYNOTE" },
  { name: "Marcus Rivera", title: "Staff Engineer", company: "LangChain", tag: "TALK" },
  { name: "Yuki Tanaka", title: "Research Lead", company: "DeepMind", tag: "WORKSHOP" },
  { name: "Alex Petrov", title: "Founding Engineer", company: "CrewAI", tag: "TALK" },
  { name: "Priya Sharma", title: "VP of Engineering", company: "Anthropic", tag: "KEYNOTE" },
  { name: "James O'Brien", title: "Principal Engineer", company: "OpenAI", tag: "TALK" },
  { name: "Lin Wei", title: "CTO", company: "AgentOps", tag: "WORKSHOP" },
  { name: "Sofia Martinez", title: "ML Platform Lead", company: "Hugging Face", tag: "TALK" },
];

const tagColors: Record<string, string> = {
  KEYNOTE: "text-primary border-primary",
  TALK: "text-secondary border-secondary",
  WORKSHOP: "text-accent border-accent",
};

const SpeakersSection = () => (
  <section id="speakers" className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-lg font-bold text-primary glow-cyan mb-1">[Speakers]</h2>
      <p className="text-xs text-muted-foreground mb-8">
        // more speakers announcing soon...
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {speakers.map((s) => (
          <div
            key={s.name}
            className="border border-border bg-card p-4 hover:border-primary/50 transition-colors group"
          >
            {/* Avatar placeholder */}
            <div className="w-12 h-12 border border-border bg-muted flex items-center justify-center text-xs text-muted-foreground mb-3 group-hover:border-primary/50 transition-colors">
              {s.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="text-sm font-semibold text-foreground">{s.name}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.title}</div>
            <div className="text-xs text-primary mt-0.5">@ {s.company}</div>
            <span className={`inline-block text-[10px] border px-1.5 py-0.5 mt-2 tracking-wider ${tagColors[s.tag]}`}>
              {s.tag}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          {">"} speaker_count: {speakers.length} | status: <span className="text-accent">accepting_proposals</span>
        </p>
      </div>
    </div>
  </section>
);

export default SpeakersSection;
