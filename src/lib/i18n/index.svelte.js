import { translations } from './translations.js';

const STORAGE_KEY = 'poker-tournament-locale';

let locale = $state(loadLocale());

function loadLocale() {
  if (typeof localStorage === 'undefined') return 'en';
  return localStorage.getItem(STORAGE_KEY) || 'en';
}

export function getLocale() {
  return locale;
}

export function setLocale(lang) {
  locale = lang;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lang);
  }
}

export function toggleLocale() {
  setLocale(locale === 'en' ? 'fr' : 'en');
}

export function t(key, params = {}) {
  const entry = translations[key];
  if (!entry) return key;
  let text = entry[locale] || entry['en'] || key;
  for (const [k, v] of Object.entries(params)) {
    text = text.replace(`{${k}}`, v);
  }
  return text;
}
