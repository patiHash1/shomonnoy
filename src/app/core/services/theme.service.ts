import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly themeSignal = signal<'light' | 'dark'>('light');

  constructor() {
    // Read cached theme, defaulting to light mode as requested
    const cached = localStorage.getItem('shomonnoy_theme');
    if (cached === 'light' || cached === 'dark') {
      this.themeSignal.set(cached);
    } else {
      this.themeSignal.set('light');
    }

    // Reactively update HTML document attribute
    effect(() => {
      const activeTheme = this.themeSignal();
      document.documentElement.setAttribute('data-theme', activeTheme);
      localStorage.setItem('shomonnoy_theme', activeTheme);
    });
  }

  toggleTheme() {
    this.themeSignal.update(current => current === 'dark' ? 'light' : 'dark');
  }

  isDark() {
    return this.themeSignal() === 'dark';
  }
}
