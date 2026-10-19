'use client';

import { MotionConfig, motion } from 'framer-motion';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { emailAddress, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@/data/contact';
import { projects } from '@/data/projects';
import { useTheme } from './ThemeProvider';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export default function CommandPalette({ initialOpen = false }) {
  const { toggleTheme } = useTheme();
  const reduced = usePrefersReducedMotion();
  const [open, setOpen] = useState(initialOpen);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [status, setStatus] = useState('');
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const previousFocus = useRef(null);
  const titleId = useId();
  const listId = useId();

  const actions = useMemo(
    () => createActions({
      toggleTheme,
      reduced,
      setOpen,
      setStatus,
    }),
    [reduced, toggleTheme],
  );

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return actions;
    return actions.filter((action) => `${action.label} ${action.keywords}`.toLowerCase().includes(needle));
  }, [actions, query]);

  const index = Math.min(activeIndex, Math.max(results.length - 1, 0));

  useEffect(() => {
    const toggle = () => {
      setQuery('');
      setActiveIndex(0);
      setStatus('');
      setOpen((value) => !value);
    };
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        toggle();
      }
    };
    window.addEventListener('palette:toggle', toggle);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('palette:toggle', toggle);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    previousFocus.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      const previous = previousFocus.current;
      if (previous && typeof previous.focus === 'function') previous.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex(Math.min(index + 1, Math.max(results.length - 1, 0)));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex(Math.max(index - 1, 0));
      } else if (event.key === 'Enter') {
        event.preventDefault();
        results[index]?.run();
      } else if (event.key === 'Tab') {
        const root = dialogRef.current;
        const items = root ? [...root.querySelectorAll('input, button:not([tabindex="-1"])')] : [];
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, index, results]);

  useEffect(() => {
    if (!open) return;
    document.getElementById(`${listId}-opt-${index}`)?.scrollIntoView({ block: 'nearest' });
  }, [open, index, listId]);

  if (!open) return null;

  return (
    <div className="palette-root">
      <button
        type="button"
        className="palette-backdrop"
        aria-label="Close command palette"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />
      <MotionConfig reducedMotion="user">
      <motion.div
        ref={dialogRef}
        className="palette-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id={titleId} className="sr-only">Command palette</h2>
        <input
          ref={inputRef}
          role="combobox"
          aria-expanded="true"
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={results[index] ? `${listId}-opt-${index}` : undefined}
          placeholder="Jump, open, or toggle"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
        />
        {results.length === 0 ? (
          <p className="palette-empty">No matches.</p>
        ) : (
          <ul id={listId} className="palette-list" role="listbox" aria-label="Commands">
            {results.map((action, optionIndex) => (
              <li key={action.id} role="presentation">
                <button
                  id={`${listId}-opt-${optionIndex}`}
                  type="button"
                  role="option"
                  tabIndex={-1}
                  aria-selected={optionIndex === index}
                  className={optionIndex === index ? 'is-active' : ''}
                  onMouseEnter={() => setActiveIndex(optionIndex)}
                  onClick={() => action.run()}
                >
                  <span>{action.label}</span>
                  <span className="palette-group">{action.group}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="palette-status" role="status">{status}</p>
        <p className="palette-hint">Arrow keys to move, Enter to run, Esc to close</p>
      </motion.div>
      </MotionConfig>
    </div>
  );
}

function createActions({ toggleTheme, reduced, setOpen, setStatus }) {
  const jump = (id) => {
    window.dispatchEvent(new CustomEvent('case:open', { detail: id }));
    const node = document.getElementById(id);
    const heading = node?.querySelector('h1, h2, h3') || node;
    if (heading && !heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
    node?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    if (heading && typeof heading.focus === 'function') heading.focus({ preventScroll: true });
    setOpen(false);
  };

  const openUrl = (url) => {
    setOpen(false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const sections = [
    ['top', 'Go to top'],
    ['demo', 'Go to homing demo'],
    ['work', 'Go to Work'],
    ['experience', 'Go to Experience'],
    ['skills', 'Go to Skills'],
    ['about', 'Go to About'],
    ['contact', 'Go to Contact'],
  ];

  return [
    ...sections.map(([id, label]) => ({
      id: `section-${id}`,
      label,
      group: 'Navigate',
      keywords: id,
      run: () => jump(id),
    })),
    ...projects.filter((project) => project.featured).map((project) => ({
      id: `view-${project.id}`,
      label: `View ${project.title}`,
      group: 'Projects',
      keywords: `${project.tags.join(' ')} ${project.category}`,
      run: () => jump(project.id),
    })),
    ...projects.filter((project) => project.href).map((project) => ({
      id: `repo-${project.id}`,
      label: `Open ${project.title} repository`,
      group: 'Projects',
      keywords: `${project.tags.join(' ')} ${project.category}`,
      run: () => openUrl(project.href),
    })),
    {
      id: 'cat',
      label: 'Pet the cat',
      group: 'Actions',
      keywords: 'cat pet hello visitor',
      run: () => {
        setOpen(false);
        window.dispatchEvent(new CustomEvent('cat:pet'));
      },
    },
    {
      id: 'theme',
      label: 'Toggle theme',
      group: 'Actions',
      keywords: 'dark light',
      run: () => {
        toggleTheme();
        setOpen(false);
      },
    },
    {
      id: 'email',
      label: 'Copy email',
      group: 'Actions',
      keywords: 'mail contact',
      run: async () => {
        const address = emailAddress();
        try {
          await navigator.clipboard.writeText(address);
          setStatus('Email copied.');
        } catch {
          setStatus(address);
        }
      },
    },
    {
      id: 'resume',
      label: 'Open resume',
      group: 'Actions',
      keywords: 'pdf',
      run: () => {
        setOpen(false);
        window.location.assign(RESUME_URL);
      },
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn',
      group: 'Actions',
      keywords: 'linkedin',
      run: () => openUrl(LINKEDIN_URL),
    },
    {
      id: 'github',
      label: 'Open GitHub',
      group: 'Actions',
      keywords: 'github',
      run: () => openUrl(GITHUB_URL),
    },
  ];
}
