import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../core/services/translate.service';

import { initLucideIcons } from '../../core/utils/viewport.util';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  constructor(public translate: TranslateService) {}

  ngAfterViewInit() {
    this.initIcons();
  }

  private initIcons() {
    initLucideIcons();
  }
}
