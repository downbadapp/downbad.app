import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-5">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background-secondary ring-1 ring-surface-border">
            <span className="text-sm font-bold text-accent-primary">DB</span>
          </div>
        </Link>


      </div>
    </header>
  );
}
