import { getLanguage, setLanguage } from './index';

describe('TranslationProvider getLanguage()', () => {
  it('should return en if set en', () => {
    setLanguage('en');
    const output = 'en';
    expect(getLanguage()).toEqual(output);
  });
  it('should return en if language outside of languages array', () => {
    localStorage.setItem('lang', '');
    const output = 'en';
    expect(getLanguage()).toEqual(output);
  });
  it('should return ru if get ru', () => {
    setLanguage('ru');
    const output = 'ru';
    expect(getLanguage()).toEqual(output);
  });
});

export {};
