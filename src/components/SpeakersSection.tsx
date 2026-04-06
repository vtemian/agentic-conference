import { useState } from "react";
import { useInView } from "@/hooks/useInView";

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

const SpeakerCard = ({ s, index, inView }: { s: typeof speakers[0]; index: number; inView: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-border bg-card p-4 transition-all duration-300 group relative overflow-hidden cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.4s ease ${index * 0.08}s, transform 0.4s ease ${index * 0.08}s, border-color 0.2s`,
        borderColor: hovered ? "hsl(var(--primary) / 0.5)" : undefined,
      }}
    >
      {/* Scan line on hover */}
      <div
        className="absolute left-0 w-full h-[2px] bg-primary/20 pointer-events-none transition-all duration-700"
        style={{
          top: hovered ? "100%" : "-2px",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Avatar */}
      <div
        className="w-12 h-12 border border-border bg-muted flex items-center justify-center text-xs text-muted-foreground mb-3 transition-all duration-300"
        style={{
          borderColor: hovered ? "hsl(var(--primary) / 0.5)" : undefined,
          boxShadow: hovered ? "0 0 12px hsl(175 80% 50% / 0.15)" : "none",
        }}
      >
        <span style={{ 
          display: "inline-block",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.2s",
        }}>
          {s.name.split(" ").map(n => n[0]).join("")}
        </span>
      </div>

      <div className="text-sm font-semibold text-foreground">{s.name}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{s.title}</div>
      <div className="text-xs text-primary mt-0.5" style={{
        textShadow: hovered ? "0 0 8px hsl(175 80% 50% / 0.4)" : "none",
        transition: "text-shadow 0.3s",
      }}>
        @ {s.company}
      </div>
      <span className={`inline-block text-[10px] border px-1.5 py-0.5 mt-2 tracking-wider ${tagColors[s.tag]} transition-all duration-200`}
        style={{
          boxShadow: hovered ? "0 0 8px hsl(175 80% 50% / 0.1)" : "none",
        }}
      >
        {s.tag}
      </span>
    </div>
  );
};

const SpeakersSection = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="speakers" className="py-20 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="text-lg font-bold text-primary glow-cyan mb-1">[Speakers]</h2>
        <p className="text-xs text-muted-foreground mb-8">
          // more speakers announcing soon...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {speakers.map((s, i) => (
            <SpeakerCard key={s.name} s={s} index={i} inView={inView} />
          ))}
        </div>

        <div className="mt-6 text-center" style={{
          opacity: inView ? 1 : 0,
          transition: "opacity 0.5s ease 0.8s",
        }}>
          <p className="text-xs text-muted-foreground">
            {">"} speaker_count: {speakers.length} | status: <span className="text-accent">accepting_proposals</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
