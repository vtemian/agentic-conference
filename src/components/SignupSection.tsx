import { useState } from "react";

const SignupSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="waitlist" className="py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs text-muted-foreground mb-2 tracking-widest">
          // SUBSCRIBE_FOR_UPDATES
        </p>
        <h2 className="text-lg font-bold text-primary glow-cyan mb-6">
          Join the Waitlist
        </h2>

        {submitted ? (
          <div className="border border-secondary bg-card p-6">
            <p className="text-secondary glow-green text-sm">
              ✓ registration.confirmed
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              // you'll be the first to know when tickets drop
            </p>
            <button
              className="mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setSubmitted(false)}
            >
              [register another]
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center border border-border bg-card px-3">
              <span className="text-primary text-xs mr-2">$</span>
              <input
                type="email"
                required
                placeholder="agent@your-company.dev"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="border border-primary bg-primary/10 text-primary px-6 py-3 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 border-glow-cyan whitespace-nowrap"
            >
              ./subscribe<span className="animate-blink ml-1">▌</span>
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
