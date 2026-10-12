'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { GitHubIcon, StatusBadge, Tag } from './Ui';

export default function ProjectCard({
  title,
  period,
  status,
  summary,
  desc,
  tags,
  role,
  href,
  shots = [],
  frame,
}) {
  const [open, setOpen] = useState(false);
  const openerRef = useRef(null);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const titleId = useId();
  const shot = shots[0];

  useEffect(() => {
    if (!open) return undefined;
    const dialog = dialogRef.current;
    const opener = openerRef.current;
    const portal = dialog?.closest('.modal-root');
    const hidden = [];
    document.querySelectorAll('body > *').forEach((el) => {
      if (el === portal || (dialog && el.contains(dialog))) return;
      if (el.hasAttribute('inert')) return;
      el.setAttribute('inert', '');
      hidden.push(el);
    });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('dialog-open');

    const frameId = requestAnimationFrame(() => closeRef.current?.focus());

    const focusable = () => {
      if (!dialog) return [];
      return [...dialog.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])')]
        .filter((node) => !node.hasAttribute('disabled'));
    };

    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;
      const nodes = focusable();
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove('dialog-open');
      hidden.forEach((el) => el.removeAttribute('inert'));
      opener?.focus();
    };
  }, [open]);

  return (
    <article className="proj-card reveal">
      <div className="proj-art" style={frame ? { '--frame': frame } : undefined}>
        {shot ? (
          <Image
            src={shot.src}
            alt=""
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="proj-shot"
          />
        ) : (
          <div className="proj-fallback" aria-hidden="true">
            <span>{title.slice(0, 1)}</span>
          </div>
        )}
      </div>
      <div className="proj-body">
        <div className="proj-head">
          <h3 className="proj-title">{title}</h3>
          <StatusBadge status={status} />
        </div>
        <p className="proj-desc">{summary}</p>
        <div className="proj-actions">
          <button
            ref={openerRef}
            type="button"
            className="btn-outline"
            aria-haspopup="dialog"
            onClick={() => setOpen(true)}
          >
            View project
          </button>
          {href && (
            <a
              className="gh-icon"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub repository for ${title}`}
            >
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>
      {open && createPortal(
        <div className="modal-root">
          <button
            type="button"
            className="modal-backdrop"
            tabIndex={-1}
            aria-label="Close project details"
            onClick={() => setOpen(false)}
          />
          <div
            ref={dialogRef}
            className="modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <div className="modal-toolbar">
              <h2 id={titleId} className="modal-title">{title}</h2>
              <button ref={closeRef} type="button" className="btn-outline close-btn" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <div className="modal-body">
              <p className="modal-meta">
                <StatusBadge status={status} />
                <span>{period}</span>
              </p>
              <p className="modal-role">{role}</p>
              <p className="modal-desc">{desc}</p>
              <h3 className="modal-sub">Technologies</h3>
              <ul className="chips">
                {tags.map((tag) => (
                  <li key={tag}><Tag>{tag}</Tag></li>
                ))}
              </ul>
              {shots.length > 0 && (
                <>
                  <h3 className="modal-sub">Screenshots</h3>
                  <div className="shot-list">
                    {shots.map((item, index) => (
                      <figure key={item.src}>
                        <Image
                          src={item.src}
                          alt={`${title}, screenshot ${index + 1} of ${shots.length}`}
                          width={item.width}
                          height={item.height}
                          sizes="(min-width: 768px) 680px, 100vw"
                          className="modal-img"
                        />
                        <figcaption>Screenshot {index + 1} of {shots.length}</figcaption>
                      </figure>
                    ))}
                  </div>
                </>
              )}
              {href && (
                <div className="modal-repo">
                  <a
                    className="gh-icon"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub repository for ${title}`}
                  >
                    <GitHubIcon />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </article>
  );
}
