import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiGithub, mdiTwitter, mdiReddit } from '@mdi/js';

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
