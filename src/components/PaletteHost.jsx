'use client';

import { useEffect, useState } from 'react';

export default function PaletteHost() {
  const [Palette, setPalette] = useState(null);

  useEffect(() => {
    if (Palette) return undefined;
    let cancelled = false;

    const load = () => {
      import('./CommandPalette').then((mod) => {
        if (!cancelled) setPalette(() => mod.default);
      });
    };

    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        load();
      }
    };

    window.addEventListener('palette:toggle', load);
    window.addEventListener('keydown', onKey);
    return () => {
      cancelled = true;
      window.removeEventListener('palette:toggle', load);
      window.removeEventListener('keydown', onKey);
    };
  }, [Palette]);

  return Palette ? <Palette initialOpen /> : null;
}
