import { useEffect, useState } from "react";

const ASCII_ART = `
 █████╗  ██████╗ ███████╗███╗   ██╗████████╗██╗ ██████╗
██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██║██╔════╝
███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   ██║██║     
██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ██║██║     
██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ██║╚██████╗
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝ ╚═════╝
`.trim();

const TAGLINE = "The conference for engineers building autonomous AI agents";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < TAGLINE.length) {
        setTypedText(TAGLINE.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-14 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(175 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 50%) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 text-center max-w-4xl">
        {/* ASCII Art */}
        <pre className="text-primary glow-cyan text-[0.35rem] sm:text-[0.5rem] md:text-[0.65rem] lg:text-xs leading-tight mb-6 overflow-x-auto">
          {ASCII_ART}
        </pre>

        <p className="text-xs text-muted-foreground mb-2 tracking-widest uppercase">
          // engineer.conference.v1
        </p>

        {/* Typing tagline */}
        <div className="h-8 flex items-center justify-center mb-8">
          <p className="text-sm md:text-base text-foreground">
            <span className="text-secondary">{">"}</span> {typedText}
            <span className={`text-primary ${showCursor ? "opacity-100" : "opacity-0"}`}>▌</span>
          </p>
        </div>

        {/* Details */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground mb-8">
          <span className="border border-border px-3 py-1">DATE: <span className="text-accent">TBD</span></span>
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
      </div>
    </section>
  );
};

export default HeroSection;
