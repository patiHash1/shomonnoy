import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { VisionComponent } from './features/vision/vision.component';
import { UpdatesComponent } from './features/updates/updates.component';
import { NetworkComponent } from './features/network/network.component';
import { EbooksComponent } from './features/ebooks/ebooks.component';
import { MessagesComponent } from './features/messages/messages.component';
import { ContactComponent } from './features/contact/contact.component';
import { initRevealObserver } from './core/utils/viewport.util';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    VisionComponent,
    UpdatesComponent,
    NetworkComponent,
    EbooksComponent,
    MessagesComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'shomonnoy';

  ngOnInit() {}

  ngAfterViewInit() {
    // Run observer setup when DOM is completely loaded
    setTimeout(() => {
      initRevealObserver();
    }, 100);
  }
}
