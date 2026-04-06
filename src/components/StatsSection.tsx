import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const stats = [
  { label: "SPEAKERS", value: 30, suffix: "+", color: "border-primary text-primary glow-cyan" },
  { label: "SESSIONS", value: 50, suffix: "+", color: "border-secondary text-secondary glow-green" },
  { label: "TRACKS", value: 4, suffix: "", color: "border-accent text-accent glow-amber" },
  { label: "WORKSHOPS", value: 12, suffix: "", color: "border-primary text-primary glow-cyan" },
  { label: "DAYS", value: 2, suffix: "", color: "border-secondary text-secondary glow-green" },
  { label: "ENGINEERS", value: 500, suffix: "+", color: "border-accent text-accent glow-amber" },
];

const AnimatedNumber = ({ target, suffix, started }: { target: number; suffix: string; started: boolean }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const steps = 30;
    const increment = target / steps;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrent(step >= steps ? target : Math.floor(increment * step));
      if (step >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target]);

  return <>{started ? current : 0}{suffix}</>;
};

const StatsSection = () => {
  const { ref, inView } = useInView(0.3);

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <p className="text-xs text-muted-foreground mb-8 tracking-widest">
          // CONFERENCE_SPECS
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-l-2 ${s.color.split(" ")[0]} bg-card border border-border p-4 transition-all duration-500 hover:bg-card/80 hover:translate-x-1 stat-card`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div className={`text-2xl md:text-3xl font-bold ${s.color.split(" ").slice(1).join(" ")}`}>
                <AnimatedNumber target={s.value} suffix={s.suffix} started={inView} />
              </div>
              <div className="text-xs text-muted-foreground mt-1 tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
