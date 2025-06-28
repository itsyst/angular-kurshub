import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IconRegistryService } from './components/icon/icon-registry.service';
import { ICONS } from './components/icon/icons.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private iconRegistry = inject(IconRegistryService);

  ngOnInit(): void {
    this.iconRegistry.registerIcons(ICONS);
  }
}
