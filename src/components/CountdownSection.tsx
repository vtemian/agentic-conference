import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-15T09:00:00Z");

const CountdownSection = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, TARGET.getTime() - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { label: "DAYS", value: time.days },
    { label: "HRS", value: time.hours },
    { label: "MIN", value: time.minutes },
    { label: "SEC", value: time.seconds },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-dot" />
          <span className="text-xs text-secondary tracking-widest uppercase glow-green">LIVE_COUNTDOWN</span>
        </div>

        <div className="flex items-center justify-center gap-3 md:gap-6 mb-4">
          {blocks.map((b, i) => (
            <div key={b.label} className="flex items-center gap-3 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="border border-border bg-card px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]">
                  <span className="text-2xl md:text-4xl font-bold text-primary glow-cyan">
                    {String(b.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground mt-1 tracking-widest">{b.label}</span>
              </div>
              {i < blocks.length - 1 && (
                <span className="text-xl md:text-3xl text-muted-foreground font-bold mb-4">:</span>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          // target: 2026.10.15 — subject to change
        </p>
      </div>
    </section>
  );
};

export default CountdownSection;
