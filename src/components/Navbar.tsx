import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="text-primary glow-cyan font-bold text-sm tracking-wider">
          [agentic.engineer]
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-xs">
          <a href="#speakers" className="text-foreground hover:text-primary transition-colors">
            ./speakers
          </a>
          <span className="text-muted-foreground cursor-not-allowed">
            ./schedule <span className="text-muted-foreground/60">(soon)</span>
          </span>
          <span className="text-muted-foreground cursor-not-allowed">
            ./sponsors <span className="text-muted-foreground/60">(soon)</span>
          </span>
          <a
            href="#waitlist"
            className="border border-primary text-primary px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            $ join-waitlist<span className="animate-blink">▌</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground text-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "[x]" : "[≡]"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-3 text-xs">
          <a href="#speakers" className="text-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>
            ./speakers
          </a>
          <span className="text-muted-foreground">./schedule (soon)</span>
          <span className="text-muted-foreground">./sponsors (soon)</span>
          <a
            href="#waitlist"
            className="border border-primary text-primary px-3 py-1 w-fit hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            $ join-waitlist
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
