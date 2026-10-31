import { en } from '../src/content/en.js';
import { ta } from '../src/content/ta.js';

const keys = (value, path = '') => Object.keys(value).sort().flatMap((key) => {
  const next = path ? `${path}.${key}` : key;
  return value[key] && typeof value[key] === 'object' && !Array.isArray(value[key])
    ? [next, ...keys(value[key], next)]
    : [next];
});
const englishKeys = keys(en);
const tamilKeys = keys(ta);
if (englishKeys.join('|') !== tamilKeys.join('|')) {
  const missing = englishKeys.filter((key) => !tamilKeys.includes(key));
  const extra = tamilKeys.filter((key) => !englishKeys.includes(key));
  throw new Error(`Content keys differ. Missing in ta: ${missing.join(', ')}. Extra in ta: ${extra.join(', ')}`);
}
