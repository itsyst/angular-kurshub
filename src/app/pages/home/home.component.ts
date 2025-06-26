import { ActionCallComponent } from './../../components/action-call/action-call.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeaturedCoursesComponent } from '../../components/featured-courses/featured-courses.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatusComponent } from '../../components/status/status.component';
import { TopCategoryComponent } from "../../components/top-category/top-category.component";
import { TopInstructorComponent } from '../../components/top-instructor/top-instructor.component';
import { StudentsReviewComponent } from '../../components/students-review/students-review.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedCoursesComponent,
    StatusComponent,
    CommonModule,
    TopCategoryComponent,
    TopInstructorComponent,
    StudentsReviewComponent,
    ActionCallComponent
],
  templateUrl: './home.component.html',
})
export class HomeComponent {
}
