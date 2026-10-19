export const themeBoot = [
  'try{',
  'var s=null;',
  'try{s=localStorage.getItem("theme")}catch(e){}',
  'var dark=window.matchMedia("(prefers-color-scheme: dark)").matches;',
  'var t=(s==="dark"||s==="light")?s:(dark?"dark":"light");',
  'document.documentElement.dataset.theme=t;',
  'var c=t==="dark"?"#261e30":"#f6f1e8";',
  'document.querySelectorAll("meta[name=theme-color]").forEach(function(m){m.setAttribute("content",c)});',
  '}catch(e){}',
].join('');
