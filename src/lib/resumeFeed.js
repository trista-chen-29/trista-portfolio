const KEY = 'trista-resume-feed';

export function readFeed() {
  if (typeof window === 'undefined') return { hardware: 0, software: 0 };
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '{}');
    return {
      hardware: Number(raw.hardware) || 0,
      software: Number(raw.software) || 0,
    };
  } catch {
    return { hardware: 0, software: 0 };
  }
}

export function noteInterest(kind, amount = 1) {
  if (kind !== 'hardware' && kind !== 'software') return suggestResume();
  const feed = readFeed();
  feed[kind] += amount;
  localStorage.setItem(KEY, JSON.stringify(feed));
  window.dispatchEvent(new CustomEvent('resume-feed', { detail: feed }));
  return suggestResume(feed);
}

export function suggestResume(feed = readFeed()) {
  const gap = feed.hardware - feed.software;
  if (Math.abs(gap) < 2) return null;
  return gap > 0 ? 'embedded' : 'software';
}

export function noteFocusFromUrl() {
  const focus = new URLSearchParams(window.location.search).get('focus');
  if (focus === 'embedded' || focus === 'hardware') noteInterest('hardware', 6);
  if (focus === 'software') noteInterest('software', 6);
}
