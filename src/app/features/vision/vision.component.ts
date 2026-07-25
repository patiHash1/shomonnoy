import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../core/services/translate.service';

import { initLucideIcons } from '../../core/utils/viewport.util';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent implements AfterViewInit {
  constructor(public translate: TranslateService) {}

  ngAfterViewInit() {
    this.initIcons();
  }

  private initIcons() {
    initLucideIcons();
  }
}
