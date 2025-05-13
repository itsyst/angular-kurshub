import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-pipes-forms';
}
