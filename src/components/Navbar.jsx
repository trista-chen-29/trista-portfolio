'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const tabs = [
  { label: 'About',      href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects',   href: '/projects' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      height: 'var(--nav-h)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2.5rem',
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.25s, border-color 0.25s',
    }}>

      {/* Logo */}
      <Link href="/" style={{
        fontFamily: 'var(--mono)', fontSize: '.82rem', fontWeight: 500,
        color: 'var(--text)', textDecoration: 'none', letterSpacing: '.02em',
      }}>
        trista<span style={{ color: 'var(--accent)' }}>.</span>chen
      </Link>

      {/* Tab Pills */}
      <div style={{
        display: 'flex',
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        padding: '3px',
        gap: '1px',
      }}>
        {tabs.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} style={{
              fontFamily: 'var(--mono)', fontSize: '.72rem',
              letterSpacing: '.05em',
              padding: '.38rem 1.1rem',
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'background 0.18s, color 0.18s',
              background: active ? 'var(--surface)' : 'transparent',
              color: active ? 'var(--text)' : 'var(--text2)',
              boxShadow: active ? 'var(--shadow)' : 'none',
            }}>
              {label}
            </Link>
          );
        })}
      </div>

      {/* Theme Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '.65rem' }}>
        <span
          suppressHydrationWarning
          style={{ fontFamily: 'var(--mono)', fontSize: '.68rem', color: 'var(--text3)' }}
        >
          {theme === 'light' ? 'Light' : 'Dark'}
        </span>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{
            width: '40px', height: '22px',
            background: 'var(--bg2)',
            border: '1px solid var(--border2)',
            borderRadius: '11px',
            cursor: 'pointer',
            position: 'relative',
            transition: 'background 0.25s, border-color 0.25s',
            flexShrink: 0,
          }}
        >
          <span
            suppressHydrationWarning
            style={{
              position: 'absolute',
              top: '2px', left: '2px',
              width: '16px', height: '16px',
              borderRadius: '50%',
              background: 'var(--accent)',
              transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
              transform: theme === 'dark' ? 'translateX(18px)' : 'translateX(0)',
              display: 'block',
            }}
          />
        </button>
      </div>

    </nav>
  );
}