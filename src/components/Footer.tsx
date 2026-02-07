import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

const socials = [
  {
    icon: mdiGithub,
    label: 'GitHub',
    href: 'https://github.com/downbadapp/community',
  },
];

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-background-secondary px-6 py-16">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Repeat CTA */}
        <div className="text-center">
          <p className="text-lg font-semibold text-text-primary">
            Get launch notifications and early access!
          </p>
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="mt-4 inline-block rounded-full bg-accent-primary px-6 py-2.5 text-sm font-semibold text-text-inverse transition-all duration-200 hover:bg-accent-primary-hover"
          >
            Join the Beta
          </Link>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-text-tertiary ring-1 ring-surface-border transition-all duration-200 hover:text-text-primary hover:ring-surface-hover"
            >
              <Icon path={s.icon} size={0.85} />
            </a>
          ))}
        </div>

        {/* Legal / copyright */}
        <div className="flex flex-col items-center gap-2 text-xs text-text-tertiary">
          <div className="flex gap-4">
            <Link to="/privacy" className="transition-colors hover:text-text-secondary">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-text-secondary">
              Terms
            </Link>

          </div>
          <p>&copy; {new Date().getFullYear()} DownBad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
