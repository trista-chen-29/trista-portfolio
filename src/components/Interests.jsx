'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const interests = [
  {
    emoji: '🧗',
    name: 'Rock climbing',
    blurb: 'The SJSU SRAC boulders currently have me parked on V1+. This semester’s assignment is V2, whether the wall agrees or not.',
  },
  {
    emoji: '🏋️',
    name: 'Gym',
    blurb: 'Still collecting beginner miles. Leg press, stairmaster, and treadmill are the rotation I actually look forward to.',
  },
  {
    emoji: '🍸',
    name: 'Cocktails',
    blurb: 'I’ll try almost anything as long as it isn’t candy-sweet. Hard liquor is welcome. Tequila is the favorite.',
  },
  {
    emoji: '🎤',
    name: 'Karaoke',
    blurb: 'Mandarin, English, and a growing queue. ROSÉ is next on the list — ambitious, but that is the point of a microphone.',
  },
  {
    emoji: '🀄',
    name: 'Mahjong',
    blurb: 'Five years, on and off. No cash on the table — only push-ups and sit-ups, which somehow still sting.',
  },
  {
    emoji: '🍜',
    name: 'Foodie',
    blurb: 'Always chasing the next bowl or pan: scallion pancake, malatang, pho, tom yum, and a matcha somewhere in between.',
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
