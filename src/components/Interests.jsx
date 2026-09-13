'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const interests = [
  {
    emoji: '🧗',
    name: 'Rock climbing',
    blurb: 'A puzzle you solve with your whole body. I like routes that look impossible until they click.',
  },
  {
    emoji: '🏋️',
    name: 'Gym',
    blurb: 'Heavy sets, messy playlists, and the same stubbornness I bring to a flaky board.',
  },
  {
    emoji: '🍷',
    name: 'Wine',
    blurb: 'Curious about people, places, and why one grape can taste like a whole evening.',
  },
  {
    emoji: '🎤',
    name: 'Karaoke',
    blurb: 'High energy, zero shame, and a very committed chorus.',
  },
  {
    emoji: '🀄',
    name: 'Mahjong',
    blurb: 'Pattern matching, table talk, and staying three tiles ahead.',
  },
];

export default function Interests() {
  const [open, setOpen] = useState(null);

  return (
    <div className="ios-group">
      <div className="ios-group-label">Off the clock</div>
      <div className="interest-grid">
        {interests.map((item) => {
          const selected = open === item.name;
          return (
            <motion.button
              key={item.name}
              type="button"
              className={`interest-card${selected ? ' open' : ''}`}
              onClick={() => setOpen(selected ? null : item.name)}
              whileTap={{ scale: 0.96 }}
              layout
            >
              <div className="interest-emoji">{item.emoji}</div>
              <div className="interest-name">{item.name}</div>
              <AnimatePresence>
                {selected && (
                  <motion.p
                    className="interest-blurb"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {item.blurb}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
