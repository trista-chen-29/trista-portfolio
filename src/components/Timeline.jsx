'use client';

import { motion } from 'framer-motion';

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
      {items.map((item, i) => {
        const current = item.type === 'current';
        return (
          <motion.article
            key={`${item.role}-${item.period}`}
            className="tl-item"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28, delay: Math.min(i, 6) * 0.06 }}
          >
            <span className={`tl-dot${current ? ' current' : ''}`} />
            <div className="tl-card">
              <div className="tl-period">{item.period}</div>
              <div className="tl-role">{item.role}</div>
              <div className="tl-company">{item.company}</div>
              <div className="tl-pills">
                <span className={`badge ${current ? 'badge-done' : 'badge-wip'}`}>
                  {typeLabel[item.type] || 'Role'}
                </span>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
