import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../core/services/translate.service';

import { initLucideIcons } from '../../core/utils/viewport.util';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements AfterViewInit {
  constructor(public translate: TranslateService) {}

  ngAfterViewInit() {
    this.initIcons();
  }

  private initIcons() {
    initLucideIcons();
  }
}
