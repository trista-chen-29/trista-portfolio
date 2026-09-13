'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const tabs = [
  { label: 'About', href: '/', icon: PersonIcon },
  { label: 'Experience', href: '/experience', icon: BriefcaseIcon },
  { label: 'Projects', href: '/projects', icon: GridIcon },
];

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12a4.2 4.2 0 1 0-4.2-4.2A4.2 4.2 0 0 0 12 12Zm0 1.8c-3.6 0-8.1 1.8-8.1 5.4v.9A1.2 1.2 0 0 0 5.1 21h13.8a1.2 1.2 0 0 0 1.2-1.0v-.8c0-3.6-4.5-5.4-8.1-5.4Z" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 6V5.4A2.4 2.4 0 0 1 11.4 3h1.2A2.4 2.4 0 0 1 15 5.4V6h4.2A1.8 1.8 0 0 1 21 7.8v3.3c-3 .9-6 1.3-9 1.3s-6-.4-9-1.3V7.8A1.8 1.8 0 0 1 4.8 6Zm2.1-.6c0-.2.2-.3.3-.3h1.2c.2 0 .3.1.3.3V6h-1.8ZM3 12.7V18.6A1.8 1.8 0 0 0 4.8 20.4h14.4A1.8 1.8 0 0 0 21 18.6v-5.9c-2.8.8-5.9 1.2-9 1.2s-6.2-.4-9-1.2Z" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.5 4.5h6v6h-6Zm9 0h6v6h-6Zm-9 9h6v6h-6Zm9 0h6v6h-6Z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const dark = theme === 'dark';

  return (
    <>
      <header className="ios-topbar">
        <Link href="/" className="ios-brand">
          trista<span>.</span>chen
        </Link>
        <nav className="ios-segmented" aria-label="Primary">
          {tabs.map(({ label, href }) => (
            <Link key={href} href={href} className={pathname === href ? 'active' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
        <button
          className={`ios-toggle${dark ? ' on' : ''}`}
          onClick={toggleTheme}
          aria-label="Toggle appearance"
          type="button"
        >
          <i />
        </button>
      </header>

      <nav className="ios-tabbar" aria-label="Mobile">
        {tabs.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? 'active' : undefined}
            onClick={(e) => {
              e.preventDefault();
              router.push(href);
            }}
          >
            <Icon />
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}
