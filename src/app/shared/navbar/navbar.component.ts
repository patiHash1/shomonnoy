import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../core/services/translate.service';
import { ScrollService } from '../../core/services/scroll.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly isMenuOpen = signal<boolean>(false);

  constructor(
    public translateService: TranslateService,
    public scrollService: ScrollService
  ) {}

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  navigateToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.scrollService.scrollTo(sectionId);
    this.scrollService.setActiveSection(sectionId);
    this.closeMenu();
  }

  switchLanguage(lang: 'en' | 'bn') {
    this.translateService.setLanguage(lang);
  }
}
