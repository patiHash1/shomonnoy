import { Injectable, signal, effect } from '@angular/core';
import { EN, TranslationType } from '../i18n/en';
import { BN } from '../i18n/bn';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  readonly currentLanguage = signal<'en' | 'bn'>('en');
  readonly translations = signal<TranslationType>(EN);

  constructor() {
    const saved = localStorage.getItem('shomonnoy_lang') || 'en';
    this.setLanguage(saved as 'en' | 'bn');

    // Reactively update HTML document lang attribute
    effect(() => {
      const activeLang = this.currentLanguage();
      document.documentElement.setAttribute('lang', activeLang);
      localStorage.setItem('shomonnoy_lang', activeLang);
    });
  }

  setLanguage(lang: 'en' | 'bn') {
    this.currentLanguage.set(lang);
    if (lang === 'bn') {
      this.translations.set(BN);
    } else {
      this.translations.set(EN);
    }
  }

  /**
   * Safe getter for translations. Can return strings, arrays or nested objects.
   */
  t(path: string): any {
    try {
      const keys = path.split('.');
      let result: any = this.translations();
      for (const key of keys) {
        result = result[key];
      }
      return result !== undefined ? result : path;
    } catch {
      return path;
    }
  }
}
