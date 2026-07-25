import { Component, OnInit, AfterViewInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '../../core/services/translate.service';
import { ScrollService } from '../../core/services/scroll.service';
import { initRevealObserver } from '../../core/utils/viewport.util';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  // Hero Balance Beam Tilt (declarative state)
  readonly beamTransform = signal<string>('rotate(0deg)');

  // Dynamic Updates shown count
  readonly shownCount = signal<number>(3);

  // Form Fields model
  fullName = '';
  email = '';
  selectedRole = 'parent';
  messageText = '';
  readonly formSuccess = signal<boolean>(false);

  // Computed feeds
  readonly visibleUpdates = computed(() => {
    const list = this.translateService.t('updates.items') || [];
    return list.slice(0, this.shownCount());
  });

  readonly hasMoreUpdates = computed(() => {
    const list = this.translateService.t('updates.items') || [];
    return this.shownCount() < list.length;
  });

  readonly galleryItems = computed(() => {
    return this.translateService.t('network.items') || [];
  });

  readonly resourceItems = computed(() => {
    return this.translateService.t('ebooks.items') || [];
  });

  readonly testimonialQuotes = computed(() => {
    return this.translateService.t('messages.quotes') || [];
  });

  constructor(
    public translateService: TranslateService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.scrollService.setActiveSection('home');
  }

  ngAfterViewInit() {
    this.triggerReveal();
  }

  // Pointer coordinate tracker for SVG tilt
  onPointerMove(e: PointerEvent) {
    const stage = e.currentTarget as HTMLElement;
    const rect = stage.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width; // 0 - 1
    const tilt = (relX - 0.5) * 14;
    this.beamTransform.set(`rotate(${tilt}deg)`);
  }

  onPointerLeave() {
    this.beamTransform.set('rotate(0deg)');
  }

  // Load more updates
  loadMore() {
    this.shownCount.update(c => c + 3);
    this.triggerReveal();
  }

  // Scroll Reveal trigger
  triggerReveal() {
    setTimeout(() => {
      initRevealObserver('.reveal:not(.in):not(.revealed)');
    }, 100);
  }

  // Helper for dynamic dropdown roles mapping
  getRoleOptions() {
    const optionsObj = this.translateService.t('contact.form.role.options') || {};
    return Object.keys(optionsObj).map(key => ({
      key: key,
      value: optionsObj[key]
    }));
  }

  // Contact Form Submission Handler
  onSubmitForm(form: any) {
    if (form.valid) {
      this.formSuccess.set(true);
      this.fullName = '';
      this.email = '';
      this.selectedRole = 'parent';
      this.messageText = '';
      form.resetForm({ role: 'parent' });
      setTimeout(() => this.formSuccess.set(false), 5000);
    }
  }

  navigateToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.scrollService.scrollTo(sectionId);
    this.scrollService.setActiveSection(sectionId);
  }
}
