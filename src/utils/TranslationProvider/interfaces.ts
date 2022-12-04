import english from '@/utils/TranslationProvider/locales/en';
import russian from '@/utils/TranslationProvider/locales/ru';
import BaseComponent from 'interfaces/base-component.interfase';

export interface ITranslations {
  en: typeof english;
  ru: typeof russian;
}

export type translateType = (
  key: keyof typeof english & keyof typeof russian,
  fallback?: string,
) => string;

export type getLanguageType = () => keyof ITranslations;
export type setLanguageType = (lang: keyof ITranslations) => void;

export type TranslationProps = BaseComponent;

export default interface ITranslationContext {
  t: translateType;
  getLanguage: getLanguageType;
  setLanguage: setLanguageType;
}
