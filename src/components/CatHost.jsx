'use client';

import { useEffect, useRef, useState } from 'react';

export default function CatHost() {
  const [Cat, setCat] = useState(null);
  const petOnMount = useRef(false);

  useEffect(() => {
    if (Cat) return undefined;
    let cancelled = false;
    let idleId = 0;
    let timerId = 0;

    const load = () => {
      import('./SiteCat').then((mod) => {
        if (!cancelled) setCat(() => mod.default);
      });
    };

    const onPet = () => {
      petOnMount.current = true;
      load();
    };

    window.addEventListener('cat:pet', onPet);
    if (window.requestIdleCallback) {
      idleId = window.requestIdleCallback(load, { timeout: 1800 });
    } else {
      timerId = window.setTimeout(load, 700);
    }

    return () => {
      cancelled = true;
      window.removeEventListener('cat:pet', onPet);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      if (timerId) window.clearTimeout(timerId);
    };
  }, [Cat]);

  return Cat ? <Cat petOnMount={petOnMount.current} /> : null;
}
