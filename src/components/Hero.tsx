import {
  mdiClockAlertOutline,
  mdiDns,
  mdiEarthPlus,
  mdiEmailCheckOutline,
  mdiNetworkOutline,
  mdiShieldCheckOutline,
  mdiWebCheck
} from '@mdi/js';
import Icon from '@mdi/react';
import { useState, type FormEvent } from 'react';

const monitors = [
  { icon: mdiShieldCheckOutline, label: 'SSL' },
  { icon: mdiDns, label: 'DNS' },
  { icon: mdiEmailCheckOutline, label: 'Email' },
  { icon: mdiWebCheck, label: 'HTTP' },
  { icon: mdiClockAlertOutline, label: 'WHOIS' },
  { icon: mdiEarthPlus, label: 'Blacklist' },
  { icon: mdiNetworkOutline, label: 'Ping' },
  { icon: mdiNetworkOutline, label: 'Port' },
];

export function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    try {
      const res = await fetch(
        'https://buttondown.com/api/emails/embed-subscribe/downbad',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ email }),
        }
      );
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16">
      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px] rounded-full bg-accent-primary/5 blur-2xl sm:blur-[80px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-2xl space-y-10 text-center">
        {/* Badge */}
        <div className="animate-fade-up space-y-3">
          <p className="text-xl font-bold tracking-tight text-text-primary">DownBad</p>
          <span className="inline-block rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent-primary">
            LAUNCHING SOON
          </span>
        </div>

        {/* Headline */}
        <div className="animate-fade-up delay-100 space-y-4">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl md:text-6xl">
          Site Health & Availability
            <br />
            <span className="text-accent-primary">no Greedflation</span>
          </h1>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-text-secondary">
          Enter your domains. We'll take it from there — discovering, validating, and watching everything; so you know the moment something goes wrong.
          <br />
          <span className="text-sm text-text-tertiary">For creators, indie hackers, freelancers, startups, and power users.</span>
          </p>
        </div>

        {/* Monitor type pills */}
        <div className="animate-fade-up delay-200 flex flex-wrap justify-center gap-2">
          {monitors.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-1.5 rounded-full border border-surface-border bg-surface px-3 py-1.5 text-xs text-text-secondary"
            >
              <Icon path={m.icon} size={0.55} className="text-accent-primary" />
              {m.label}
            </div>
          ))}
        </div>

        {/* Email signup */}
        <div id="signup" className="animate-fade-up delay-300">
          <div className="mx-auto max-w-md rounded-2xl border border-surface-border bg-surface/60 p-6 animate-pulse-glow">
            <p className="mb-4 text-sm font-medium text-text-primary">
              Get notified when we launch
            </p>
            {status === 'success' ? (
              <div className="py-2 text-center">
                <p className="text-sm font-medium text-accent-primary">You're in! 🎉</p>
                <p className="mt-1 text-xs text-text-tertiary">
                  Check your inbox to confirm your subscription.
                </p>
              </div>
            ) : (
              <>
                <form
                  className="flex flex-col gap-3 sm:flex-row"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    name="email"
                    id="bd-email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    className="flex-1 rounded-lg border border-surface-border bg-background px-4 py-2.5 text-sm text-text-primary placeholder-text-tertiary outline-none transition-colors focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="shrink-0 cursor-pointer rounded-lg bg-accent-primary px-6 py-2.5 text-sm font-semibold text-text-inverse transition-all duration-200 hover:bg-accent-primary-hover active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Joining…' : 'Join Beta'}
                  </button>
                </form>
                {status === 'error' && (
                  <p className="mt-3 text-xs text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className="mt-3 text-xs text-text-tertiary">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Price anchor */}
        <p className="animate-fade-up delay-400 text-sm text-text-tertiary">
          Free tier included · Pro starts at{' '}
          <span className="font-semibold text-text-secondary">$50/year</span>
        </p>
      </div>
    </section>
  );
}
