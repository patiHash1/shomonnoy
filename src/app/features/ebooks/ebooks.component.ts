import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../core/services/translate.service';

import { initLucideIcons } from '../../core/utils/viewport.util';

@Component({
  selector: 'app-ebooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ebooks.component.html',
  styleUrl: './ebooks.component.scss'
})
export class EbooksComponent implements AfterViewInit {
  constructor(public translate: TranslateService) {}

  ngAfterViewInit() {
    this.initIcons();
  }

  private initIcons() {
    initLucideIcons();
  }
}
