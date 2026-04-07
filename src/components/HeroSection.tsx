import { useEffect, useState, useRef } from "react";

const ASCII_ART = `
 █████╗  ██████╗ ███████╗███╗   ██╗████████╗██╗ ██████╗
██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██║██╔════╝
███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   ██║██║     
██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ██║██║     
██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ██║╚██████╗
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝ ╚═════╝
`.trim();

const BOOT_LINES = [
  { text: "> initializing agentic.engineer kernel...", delay: 200 },
  { text: "> loading autonomous_agents.so ██████████ OK", delay: 600 },
  { text: "> mounting /dev/conference ...", delay: 900 },
  { text: "> establishing neural handshake ✓", delay: 1200 },
  { text: "> SYSTEM READY", delay: 1500, accent: true },
];

const TAGLINE = "The conference for engineers building autonomous AI agents";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [bootPhase, setBootPhase] = useState(0); // 0=boot, 1=ascii reveal, 2=full
  const [visibleBootLines, setVisibleBootLines] = useState(0);
  const [crtOn, setCrtOn] = useState(false);
  const typingStarted = useRef(false);

  // CRT power-on
  useEffect(() => {
    const t = setTimeout(() => setCrtOn(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Boot sequence
  useEffect(() => {
    if (!crtOn) return;
    const timers: NodeJS.Timeout[] = [];
    BOOT_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleBootLines(i + 1), BOOT_LINES[i].delay));
    });
    timers.push(setTimeout(() => setBootPhase(1), 2000));
    timers.push(setTimeout(() => setBootPhase(2), 2600));
    return () => timers.forEach(clearTimeout);
  }, [crtOn]);

  // Typing effect
  useEffect(() => {
    if (bootPhase < 2 || typingStarted.current) return;
    typingStarted.current = true;
    let i = 0;
    const interval = setInterval(() => {
      if (i < TAGLINE.length) {
        setTypedText(TAGLINE.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [bootPhase]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`min-h-screen flex flex-col items-center justify-center px-4 pt-14 relative overflow-hidden glitch-line ${crtOn ? "crt-on" : "opacity-0"}`}>
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(175 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 50%) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 50%, hsl(0 0% 3%) 100%)'
      }} />

      <div className="relative z-10 text-center max-w-4xl w-full">
        {/* Boot sequence */}
        {bootPhase === 0 && (
          <div className="text-left max-w-lg mx-auto mb-8">
            {BOOT_LINES.slice(0, visibleBootLines).map((line, i) => (
              <p
                key={i}
                className={`text-xs mb-1 boot-line ${line.accent ? "text-secondary glow-green" : "text-muted-foreground"}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {line.text}
              </p>
            ))}
            <span className="animate-blink text-primary text-xs">▌</span>
          </div>
        )}

        {/* Main content after boot */}
        {bootPhase >= 1 && (
          <>
            {/* ASCII Art with glitch */}
            <pre className="text-primary glitch-glow glitch-text text-[0.35rem] sm:text-[0.5rem] md:text-[0.65rem] lg:text-xs leading-tight mb-6 overflow-x-auto">
              {ASCII_ART}
            </pre>

            <p className="text-xs text-muted-foreground mb-2 tracking-widest uppercase">
              // engineer.conference.v1
            </p>
          </>
        )}

        {bootPhase >= 2 && (
          <>
            {/* Typing tagline */}
            <div className="h-8 flex items-center justify-center mb-8">
              <p className="text-sm md:text-base text-foreground">
                <span className="text-secondary">{">"}</span> {typedText}
                <span className={`text-primary ${showCursor ? "opacity-100" : "opacity-0"}`}>▌</span>
              </p>
            </div>

            {/* Details */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground mb-8">
              <span className="border border-border px-3 py-1">DATE: <span className="text-accent">25th of Nov 2026</span></span>
              <span className="border border-border px-3 py-1">LOCATION: <span className="text-accent">TBD</span></span>
              <span className="border border-border px-3 py-1">STATUS: <span className="text-secondary">OPEN</span></span>
            </div>

            {/* CTA */}
            <a
              href="#waitlist"
              className="inline-block border border-primary text-primary px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 border-glow-cyan"
            >
              $ ./join-waitlist<span className="animate-blink ml-1">▌</span>
            </a>

            {/* Scroll hint */}
            <div className="mt-16 text-muted-foreground text-xs animate-bounce">
              ↓ scroll ↓
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
