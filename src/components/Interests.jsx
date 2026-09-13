'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const interests = [
  {
    emoji: '🧗',
    name: 'Rock climbing',
    blurb: 'Currently stuck on V1+ at the SJSU SRAC boulders. Goal this semester: send V2.',
  },
  {
    emoji: '🏋️',
    name: 'Gym',
    blurb: 'Still very beginner. Leg press, stairmaster, and treadmill are my favorites.',
  },
  {
    emoji: '🍸',
    name: 'Cocktails',
    blurb: 'All the cocktails — just not too sweet. Hard liquor is fine; tequila is better.',
  },
  {
    emoji: '🎤',
    name: 'Karaoke',
    blurb: 'Mandarin and English. Next boss fight: ROSÉ songs.',
  },
  {
    emoji: '🀄',
    name: 'Mahjong',
    blurb: 'Five years on and off. I do not bet money — I bet push-ups and sit-ups.',
  },
  {
    emoji: '🍜',
    name: 'Foodie',
    blurb: 'Always hunting the next bowl. Green onion pancake, malatang, pho, tom yum, matcha — yes.',
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
