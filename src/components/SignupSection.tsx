import { useState, useRef, useEffect } from "react";
import { useInView } from "@/hooks/useInView";

const SUCCESS_CHARS = "✓ registration.confirmed";

const SignupSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [focused, setFocused] = useState(false);
  const { ref, inView } = useInView(0.3);
  const inputRef = useRef<HTMLInputElement>(null);

  // Typewriter effect for success message
  useEffect(() => {
    if (!submitted) { setSuccessText(""); return; }
    let i = 0;
    const interval = setInterval(() => {
      if (i < SUCCESS_CHARS.length) {
        setSuccessText(SUCCESS_CHARS.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="waitlist" className="py-20 px-4">
      <div
        className="max-w-xl mx-auto text-center"
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <p className="text-xs text-muted-foreground mb-2 tracking-widest">
          // SUBSCRIBE_FOR_UPDATES
        </p>
        <h2 className="text-lg font-bold text-primary glow-cyan mb-6">
          Join the Waitlist
        </h2>

        {submitted ? (
          <div className="border border-secondary bg-card p-6 signup-success">
            <p className="text-secondary glow-green text-sm">
              {successText}<span className="animate-blink">▌</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2" style={{
              opacity: successText.length >= SUCCESS_CHARS.length ? 1 : 0,
              transition: "opacity 0.3s ease 0.2s",
            }}>
              // you'll be the first to know when tickets drop
            </p>
            <button
              className="mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors hover:glow-cyan"
              onClick={() => setSubmitted(false)}
            >
              [register another]
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <div
              className="flex-1 flex items-center border bg-card px-3 transition-all duration-300"
              style={{
                borderColor: focused ? "hsl(var(--primary))" : "hsl(var(--border))",
                boxShadow: focused ? "0 0 12px hsl(175 80% 50% / 0.15), inset 0 0 8px hsl(175 80% 50% / 0.05)" : "none",
              }}
            >
              <span className="text-primary text-xs mr-2 transition-opacity duration-200" style={{
                opacity: focused ? 1 : 0.6,
              }}>$</span>
              <input
                ref={inputRef}
                type="email"
                required
                placeholder="agent@your-company.dev"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-full bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {focused && (
                <span className="text-primary animate-blink text-xs">▌</span>
              )}
            </div>
            <button
              type="submit"
              className="border border-primary bg-primary/10 text-primary px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 border-glow-cyan whitespace-nowrap group"
            >
              <span className="group-hover:tracking-wider transition-all duration-200">./subscribe</span>
              <span className="animate-blink ml-1">▌</span>
            </button>
          </form>
        )}

        <p className="text-[10px] text-muted-foreground mt-4">
          // no spam, only signal. unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default SignupSection;
