import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../core/services/translate.service';

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './network.component.html',
  styleUrl: './network.component.scss'
})
export class NetworkComponent implements AfterViewInit {
  constructor(public translate: TranslateService) {}

  ngAfterViewInit() {
    this.initIcons();
  }

  private initIcons() {
    if ((window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }
}
