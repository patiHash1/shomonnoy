import { Component, signal, computed, effect, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../core/services/translate.service';

import { initLucideIcons } from '../../core/utils/viewport.util';

@Component({
  selector: 'app-updates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.scss'
})
export class UpdatesComponent implements AfterViewInit {
  readonly INITIAL_COUNT = 3;
  readonly shownCount = signal<number>(this.INITIAL_COUNT);

  readonly allUpdates = computed(() => {
    return this.translate.translations().updates.items || [];
  });

  readonly visibleUpdates = computed(() => {
    return this.allUpdates().slice(0, this.shownCount());
  });

  readonly hasMore = computed(() => {
    return this.shownCount() < this.allUpdates().length;
  });

  constructor(public translate: TranslateService) {
    effect(() => {
      this.translate.currentLanguage();
      this.shownCount.set(this.INITIAL_COUNT);
      setTimeout(() => this.initIcons(), 50);
    }, { allowSignalWrites: true });
  }

  ngAfterViewInit() {
    this.initIcons();
  }

  loadMore() {
    this.shownCount.update(count => count + 3);
    setTimeout(() => this.initIcons(), 50);
  }

  private initIcons() {
    initLucideIcons();
  }
}
