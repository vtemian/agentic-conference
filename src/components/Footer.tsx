const Footer = () => {
  const divider = "═".repeat(60);

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <pre className="text-[0.5rem] text-muted-foreground/30 text-center mb-8 overflow-hidden">
          {divider}
        </pre>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-primary glow-cyan font-bold">[agentic.engineer]</span>

          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">./code-of-conduct</a>
            <a href="#" className="hover:text-foreground transition-colors">./privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">./contact</a>
          </div>

          <span className="text-muted-foreground">
            © 2026 agentic.engineer
          </span>
        </div>

        <pre className="text-[0.45rem] text-muted-foreground/20 text-center mt-8 leading-tight">
{`  _____
 /     \\    "The future belongs
|  o o  |    to autonomous agents."
|  ___  |
 \\_____/     — probably an AI`}
        </pre>
      </div>
    </footer>
  );
};

export default Footer;
