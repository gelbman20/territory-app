import React, { createContext, useContext, FC, useState } from 'react';
import english from './locales/en';
import russian from './locales/ru';
import ITranslationContext, {
  ITranslations,
  translateType,
  getLanguageType,
  setLanguageType,
  TranslationProps,
} from './interfaces';

const translations: ITranslations = {
  en: {
    ...english,
  },
  ru: {
    ...russian,
  },
};

export const getLanguage: getLanguageType = () => {
  try {
    const lang = localStorage.getItem('lang') as keyof ITranslations;

    if (Object.keys(translations).includes(lang)) {
      return lang;
    }
  } catch (e) {
    console.log(e);
  }

  localStorage.setItem('lang', 'en');
  return 'en';
};

export const setLanguage: setLanguageType = (lang) => {
  localStorage.setItem('lang', lang);
};

const TranslationContext = createContext<ITranslationContext>({
  t: (key, fallback = '') => translations['en'][key] ?? fallback,
  setLanguage,
  getLanguage,
});

const TranslationProvider: FC<TranslationProps> = (props) => {
  const { children } = props;

  const [language, setLang] = useState(() => getLanguage());

  const updateLanguage: setLanguageType = (lang: keyof ITranslations) => {
    setLanguage(lang);
    setLang(lang);
  };

  const translate: translateType = (key, fallback = '') => {
    return translations[language][key] ?? fallback;
  };

  return (
    <TranslationContext.Provider
      value={{
        t: translate,
        setLanguage: updateLanguage,
        getLanguage,
      }}>
      {children}
    </TranslationContext.Provider>
  );
};

const useTranslation = () => {
  return useContext(TranslationContext);
};

export { TranslationContext, TranslationProvider, useTranslation };
