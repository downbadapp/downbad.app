import { useEffect, useRef, useState } from 'react';
import Icon from '@mdi/react';
import { mdiGithub, mdiTwitter, mdiReddit, mdiChevronDown } from '@mdi/js';

const mdiBluesky =
  'M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.601 3.476 6.178 3.126-4.52.626-8.501 2.715-4.765 7.65 4.178 4.478 7.162-1.258 8.24-3.96.18-.453.271-.676.271-.458 0-.218.091.005.271.458 1.078 2.702 4.062 8.438 8.24 3.96 3.737-4.935-.244-7.024-4.765-7.65 2.577.35 5.393-.499 6.178-3.126C20.622 9.418 21 4.458 21 3.768c0-.69-.139-1.86-.902-2.203-.659-.3-1.664-.62-4.3 1.24C13.046 4.747 10.087 8.686 9 10.8h6z';

const socials = [
  {
    icon: mdiBluesky,
    label: 'Bluesky',
    href: 'https://bsky.app/profile/downbad.app',
  },
  {
    icon: mdiTwitter,
    label: 'X',
    href: 'https://x.com/jason_downbad',
  },
  {
    icon: mdiReddit,
    label: 'Reddit',
    href: 'https://www.reddit.com/user/jason_downbad/',
  },
  {
    icon: mdiGithub,
    label: 'GitHub',
    href: 'https://github.com/downbadapp/community',
  },
];

const faqs = [
  {
    question: 'What is uptime monitoring?',
    answer:
      'Uptime monitoring means we check your website over and over again — every few minutes — to make sure it\'s working. We don\'t just check once from one place either. We check from multiple locations across the US so we can tell the difference between "your site is actually down" and "one network hiccup in Virginia." We also look at the health of things like your SSL certificate, DNS records, and email settings to make sure everything is valid and working the way it should.',
  },
  {
    question: 'Why do I need this?',
    answer:
      'If your website goes down and nobody tells you, you could lose visitors, sales, or trust — and you might not find out until someone complains. We catch problems the moment they happen and alert you right away so you can fix things before most people even notice.',
  },
  {
    question: 'Who needs this?',
    answer:
      'Anyone who runs a website, online store, blog, SaaS app, portfolio, or client site. If people visit it and you\'d want to know when it breaks — this is for you.',
  },
  {
    question: 'What monitors do you support?',
    answer:
      'Right now we support URL monitoring, SSL certificate checks, DNS health checks, WHOIS/domain expiration, email security (SPF, DKIM, DMARC), PING, PORT, and blacklist scanning. And we\'re just getting started — we have dozens more monitor types in the pipeline that we\'ll be rolling out after launch.',
  },
  {
    question: 'Can I monitor more than just domains?',
    answer:
      'Yes. Beyond domain-based checks, we also support things like Ping and Port monitoring for more technical setups. We have plans for even more advanced tools coming soon — including internal network monitoring, cloud service checks, and more. If you can point to it, we want to help you watch it.',
  },
  {
    question: 'What is "Advanced Configuration"?',
    answer:
      'It means you\'re not stuck with one-size-fits-all settings. You can customize how each monitor behaves with things like custom headers and request settings. On the notification side, you can set up event-based alerts that only fire when specific things happen, escalation chains that notify different people through different channels if a problem isn\'t resolved, and reusable templates we call recipes that make setting all of this up fast and easy. It\'s powerful stuff — but you only need to touch it if you want to.',
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All data is encrypted at rest. We use row-level security (RLS) so your data is isolated at the database level — not just in application logic. API authentication is token-based with scoped permissions, and secrets like webhook URLs and notification credentials are encrypted separately from general account data. We follow the principle of least privilege across every service in our infrastructure. Security isn't a feature we bolted on — it's baked into how the system is built."
  },
  {
    question: "What about privacy?",
    answer: "We take this seriously. We don't collect IP addresses, fingerprints, or any personally identifiable information we don't need. We don't use third-party trackers. We don't sell your data — ever. For billing, we use Stripe, one of the most trusted payment processors in the world — we never see or store your card details. The only data we keep is what's necessary to run your monitors and send you alerts. That's it."
  },
  {
    question: 'Why are you so cheap?',
    answer:
      'Because we think monitoring is overpriced and we built DownBad to prove it. We focus on practical features that people actually use, run well-orchestrated infrastructure that keeps our costs low, and skip the bloated enterprise extras that inflate everyone else\'s pricing. $50/year isn\'t a teaser — it\'s the real price, and you get everything.',
  },
  {
    question: 'What is Lifetime Founder?',
    answer:
      'It\'s a one-time $299 payment that gives you access to DownBad for life — limited to the first 100 people. We\'re offering it because multi-region infrastructure isn\'t cheap to get off the ground, and this helps us cover those early costs. In return, you get a seat at the table. We want your feedback, your feature requests, and your help shaping a product that actually works for you. It\'s a partnership as much as a purchase.',
  },
  {
    question: 'How far away is launch?',
    answer:
      'Real soon. We\'re talking a month or two — just ironing out the kinks and running through testing. Follow us on socials to watch our progress and be the first to know when we open the doors.',
    showSocials: true,
  },
];

function FAQCard({
  faq,
  index,
  isVisible,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  index: number;
  isVisible: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className="transition-[opacity,transform] duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div
        className={`rounded-2xl border transition-colors duration-300 ${
          isOpen
            ? 'border-accent-primary/30 bg-accent-primary/5'
            : 'border-surface-border bg-surface/40'
        }`}
      >
        {/* Question — always visible */}
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-6"
        >
          <h3 className="text-base font-semibold leading-snug text-text-primary">
            {faq.question}
          </h3>
          <span
            className="shrink-0 text-text-tertiary transition-transform duration-300"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <Icon path={mdiChevronDown} size={0.9} />
          </span>
        </button>

        {/* Answer — expands */}
        <div
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
          style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
        >
          <div ref={contentRef} className="px-5 pb-5 sm:px-6 sm:pb-6">
            <p
              className="text-sm leading-relaxed text-text-secondary transition-opacity duration-300"
              style={{
                opacity: isOpen ? 1 : 0,
                transitionDelay: isOpen ? '150ms' : '0ms',
              }}
            >
              {faq.answer}
            </p>
            {faq.showSocials && (
              <div
                className="mt-4 flex items-center gap-2 transition-opacity duration-300"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: isOpen ? '250ms' : '0ms',
                }}
              >
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-text-tertiary ring-1 ring-surface-border transition-all duration-200 hover:text-text-primary hover:ring-surface-hover"
                  >
                    <Icon path={s.icon} size={0.75} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const fallback = setTimeout(() => setIsVisible(true), 800);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallback);
        }
      },
      { threshold: 0, rootMargin: '50px' },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="mx-auto max-w-2xl space-y-12">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Questions? We got you.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-text-secondary">
            Tap a question to get the answer.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQCard
              key={faq.question}
              faq={faq}
              index={i}
              isVisible={isVisible}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
