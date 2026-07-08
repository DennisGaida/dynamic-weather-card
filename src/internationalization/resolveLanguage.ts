import { translations } from './locales.generated';
import type { SupportedLanguage } from './locales.generated';

interface ResolveLanguageOptions {
  configLang?: string;
  hassLang?: string;
}

const normalize = (lang?: string): SupportedLanguage | undefined => {
  if (!lang) return undefined;
  const lower = lang.toLowerCase();
  if (lower in translations) return lower as SupportedLanguage;
  const base = lower.split('-')[0];
  if (base in translations) return base as SupportedLanguage;
  return undefined;
};

export const resolveLanguage = ({ configLang, hassLang }: ResolveLanguageOptions = {}): SupportedLanguage => {
  if (configLang && configLang !== 'auto') return normalize(configLang) ?? 'en';

  return (
    normalize(hassLang) ??
    normalize(typeof navigator !== 'undefined' ? navigator.language : undefined) ??
    'en'
  );
};
