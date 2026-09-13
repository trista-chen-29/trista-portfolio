'use client';

import { motion } from 'framer-motion';
import { Tag, StatusBadge } from './Ui';

export default function ProjectCard({ title, period, status, desc, tags, role, href, children }) {
  return (
    <motion.article
      className="proj-card"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
    >
      <div className="proj-art">{children}</div>
      <div className="proj-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'flex-start' }}>
          <h3 className="proj-title">{title}</h3>
          <StatusBadge status={status} />
        </div>
        <div className="tl-period">{period}</div>
        <p className="proj-desc">{desc}</p>
        <div className="chips" style={{ padding: 0 }}>
          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        <div className="ios-row" style={{ padding: '10px 0 0', borderBottom: 'none' }}>
          <span className="value" style={{ textAlign: 'left' }}>Role · {role}</span>
          {href && (
            <a className="gh-icon" href={href} target="_blank" rel="noreferrer" aria-label="GitHub repository">
              <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.68 7.68 0 0 1 8 4.77c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
