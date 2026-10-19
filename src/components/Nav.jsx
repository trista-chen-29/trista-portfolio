'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';

const links = [
  { href: '#work', id: 'work', label: 'Work' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#contact', id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === 'dark';
  const navRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return undefined;
    const apply = () => {
      document.documentElement.style.setProperty('--nav-h', `${nav.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 24) setHidden(false);
      else if (y > last + 8) setHidden(true);
      else if (y < last - 8) setHidden(false);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const nodes = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);
    if (!nodes.length) return undefined;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActive(visible.target.id);
    }, { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.5, 1] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={navRef} className={`site-nav${hidden ? ' is-hidden' : ''}`}>
      <a className="skip-link" href="#content">Skip to content</a>
      <a className="wordmark" href="#top">
        trista<span>.</span>chen
      </a>
      <nav className="site-links" aria-label="Primary">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-current={active === link.id ? 'true' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="nav-tools">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          type="button"
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          className="cmdk-hint"
          type="button"
          aria-label="Open command palette"
          aria-keyshortcuts="Control+K Meta+K"
          onClick={() => window.dispatchEvent(new CustomEvent('palette:toggle'))}
        >
          <span aria-hidden="true">⌘K</span>
        </button>
      </div>
    </header>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M14.2 3.1a8.2 8.2 0 1 0 6.4 13.2A6.6 6.6 0 0 1 14.2 3.1Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
