import { useEffect, useRef, useState } from 'react';

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="mx-auto max-w-3xl space-y-10">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Simple, Honest Pricing
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-text-secondary">
            No per-monitor fees. No surprise charges. No enterprise sales calls.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {/* Free */}
          <div
            className="rounded-2xl border border-surface-border bg-surface/40 p-6 text-center backdrop-blur-sm transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0ms',
            }}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">Free</p>
            <p className="mt-3 text-3xl font-bold text-text-primary">$0</p>
            <p className="mt-1 text-xs text-text-tertiary">forever</p>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              One domain bundle to kick the tires. No credit card required.
            </p>
          </div>

          {/* Pro — highlighted */}
          <div
            className="rounded-2xl border border-accent-primary/40 bg-accent-primary/5 p-6 text-center ring-1 ring-accent-primary/20 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms',
            }}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-accent-primary">Pro</p>
            <p className="mt-3 text-3xl font-bold text-text-primary">$50</p>
            <p className="mt-1 text-xs text-text-tertiary">per year</p>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Multi-region monitoring, status pages, and event-based alerts.
            </p>
          </div>

          {/* Lifetime */}
          <div
            className="rounded-2xl border border-surface-border bg-surface/40 p-6 text-center backdrop-blur-sm transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms',
            }}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">Lifetime Founder</p>
            <p className="mt-3 text-3xl font-bold text-text-primary">$299</p>
            <p className="mt-1 text-xs text-text-tertiary">one-time</p>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Everything in Pro, forever. Early access and a seat at the table.
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-text-tertiary">
          Pricing may change before launch — early subscribers will be the first to know.
        </p>
      </div>
    </section>
  );
}
