import { useEffect, useRef, useState } from 'react';
import Icon from '@mdi/react';
import {
  mdiShieldLockOutline,
  mdiDnsOutline,
  mdiEmailAlertOutline,
  mdiServerNetworkOutline,
  mdiAccountGroupOutline,
  mdiEyeOffOutline,
  mdiBellAlertOutline,
  mdiEarth,
  mdiMonitorDashboard,
} from '@mdi/js';

const features = [
  {
    icon: mdiBellAlertOutline,
    title: 'Notifications',
    description:
      "Advanced event-based notifications with escalation to minimize notification fatigue, and templates to make it easy.",
  },
  {
    icon: mdiEarth,
    title: 'Multi-Region Verification',
    description:
      'Checks from multiple US regions before alerting. A single-region blip won\u2019t wake you up at 3am.',
  },
  {
    icon: mdiMonitorDashboard,
    title: 'Public Status Pages',
    description:
      'Auto-generated status pages for your domains. Share uptime with your customers without setting up another tool.',
  },
  {
    icon: mdiShieldLockOutline,
    title: 'SSL & Certificate Monitoring',
    description:
      'Track expiration dates and get alerts before certificates expire.',
  },
  {
    icon: mdiDnsOutline,
    title: 'DNS Health Checks',
    description:
      'Verify DNS records, nameservers, and propagation. Know immediately if your configuration breaks orchanges.',
  },
  {
    icon: mdiEmailAlertOutline,
    title: 'Email Security Scanning',
    description:
      'SPF, DKIM, DMARC, and blacklist status. Make sure your emails actually reach inboxes.',
  },
  {
    icon: mdiServerNetworkOutline,
    title: 'Endpoint Uptime Monitoring',
    description:
      'HTTP endpoint monitoring with response time tracking. Get alerted the moment things go down with no false positives.',
  },
  {
    icon: mdiAccountGroupOutline,
    title: 'Built for Indie Devs',
    description:
      'No enterprise pricing, no DevOps degree required. Set up in minutes, not hours.',
  },
  {
    icon: mdiEyeOffOutline,
    title: 'Privacy First',
    description:
      "We don't sell your data. No third-party trackers. Our revenue comes from subscriptions, not your information.",
  },

];

export function ValueProp() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            One Domain. Every Monitor.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-text-secondary">
            Enter a domain and we auto-configure SSL, DNS, WHOIS, email security, blacklist,
            and endpoint checks. No manual setup for each monitor type.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="rounded-2xl border border-surface-border bg-surface/40 p-6 backdrop-blur-sm transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-primary/10">
                <Icon path={f.icon} size={0.85} className="text-accent-primary" />
              </div>
              <h3 className="text-sm font-semibold text-text-primary">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
