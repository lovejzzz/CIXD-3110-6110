/* Single source of truth.
   Every data file calls defTerms() / defClass(); app.js only reads these. */
window.TERMS = {};
window.CLASSES = [];
window.defTerms = obj => {
  for (const k in obj) {
    if (window.TERMS[k]) console.warn('duplicate term key', k);
    window.TERMS[k] = obj[k];
  }
};
window.defClass = c => window.CLASSES.push(c);
