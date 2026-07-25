import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '../../core/services/translate.service';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
    public translateService: TranslateService,
    private scrollService: ScrollService
  ) {}

  navigateToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.scrollService.scrollTo(sectionId);
    this.scrollService.setActiveSection(sectionId);
  }
}
