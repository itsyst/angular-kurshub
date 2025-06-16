import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeaturedCoursesComponent } from '../../components/featured-courses/featured-courses.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatusComponent } from '../../components/status/status.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedCoursesComponent,
    StatusComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
}
