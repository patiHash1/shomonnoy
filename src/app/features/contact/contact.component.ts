import { Component, signal, AfterViewInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '../../core/services/translate.service';

import { initLucideIcons } from '../../core/utils/viewport.util';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  readonly showSuccess = signal<boolean>(false);
  readonly roleOptionsKeys = ['parent', 'teacher', 'ngo', 'donor', 'student', 'other'];

  fullName = '';
  email = '';
  selectedRole = 'parent';
  message = '';

  constructor(public translate: TranslateService) {
    effect(() => {
      this.translate.currentLanguage();
      setTimeout(() => this.initIcons(), 50);
    });
  }

  getRoleLabel(key: string): string {
    const options = this.translate.translations().contact?.form?.role?.options;
    if (options && key in options) {
      return (options as any)[key];
    }
    return key;
  }

  ngAfterViewInit() {
    this.initIcons();
  }

  onSubmit() {
    this.showSuccess.set(true);
    this.fullName = '';
    this.email = '';
    this.selectedRole = 'parent';
    this.message = '';

    setTimeout(() => {
      this.showSuccess.set(false);
    }, 5000);
  }

  private initIcons() {
    initLucideIcons();
  }
}
