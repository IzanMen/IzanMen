import es from '../locales/es.json';
import en from '../locales/en.json';
import ca from '../locales/ca.json';

const locales = {
  es,
  en,
  ca,
};

export function getTranslations(locale) {
  return locales[locale];
}