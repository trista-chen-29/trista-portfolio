'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const typeLabel = {
  current: 'Now',
  internship: 'Intern',
  club: 'Club',
  volunteer: 'Volunteer',
};

export default function Timeline({ items }) {
  return (
    <div className="timeline">
      <motion.div
        className="timeline-line"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      {items.map((item, i) => (
        <TimelineCard key={`${item.role}-${item.period}`} item={item} index={i} />
      ))}
    </div>
  );
}

function TimelineCard({ item, index }) {
  const [open, setOpen] = useState(index < 2);
  const current = item.type === 'current';

  return (
    <motion.article
      className="tl-item"
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 320, damping: 28, delay: Math.min(index, 6) * 0.07 }}
    >
      <span className={`tl-dot${current ? ' current' : ''}`} />
      <div className="tl-card">
        <button className="tl-head" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          <div className="tl-period">{item.period}</div>
          <div className="tl-role">{item.role}</div>
          <div className="tl-company">{item.company}</div>
          <div className="tl-pills">
            <span className={`badge ${current ? 'badge-done' : 'badge-wip'}`}>
              {typeLabel[item.type] || 'Role'}
            </span>
            <span className="chip">{open ? 'Hide details' : 'Show details'}</span>
          </div>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              className="tl-body"
              style={{ overflow: 'hidden' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            >
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
