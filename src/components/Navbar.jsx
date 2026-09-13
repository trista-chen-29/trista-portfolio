'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

const tabs = [
  { label: 'About', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <nav className="nav-shell" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 'var(--nav-h)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.25s, border-color 0.25s',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--mono)', fontSize: '.82rem', fontWeight: 500,
          color: 'var(--text)', textDecoration: 'none', letterSpacing: '.02em',
        }}>
          trista<span style={{ color: 'var(--accent)' }}>.</span>chen
        </Link>

        <div className="nav-tabs" style={{
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '.65rem' }}>
          <span
            className="nav-theme-label"
            suppressHydrationWarning
            style={{ fontFamily: 'var(--mono)', fontSize: '.68rem', color: 'var(--text3)' }}
          >
            {theme === 'light' ? 'Light' : 'Dark'}
          </span>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: '44px', height: '24px',
              background: 'var(--bg2)',
              border: '1px solid var(--border2)',
              borderRadius: '12px',
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
                top: '3px', left: '3px',
                width: '16px', height: '16px',
                borderRadius: '50%',
                background: 'var(--accent)',
                transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                transform: theme === 'dark' ? 'translateX(20px)' : 'translateX(0)',
                display: 'block',
              }}
            />
          </button>
          <button
            className="nav-hamburger"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="nav-drawer">
          {tabs.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'active' : undefined}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                router.push(href);
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
