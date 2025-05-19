import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../../types/course';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-featured-courses',
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './featured-courses.component.html',
  styleUrl: './featured-courses.component.css',
})
export class FeaturedCoursesComponent {
  featuredCourses: Course[] = [
    {
      id: 1,
      title: 'React Fundamentals',
      category: 'Webbutveckling',
      level: 'beginner',
      thumbnail:
        'https://img-c.udemycdn.com/course/750x422/2018828_41a9_3.jpg ',
      rating: 4.5,
      totalReviews: 120,
      lessons: 20,
      duration: '10 hours',
      price: 1000,
      discountPrice: 800,
    },
    {
      id: 2,
      title: 'Advanced Python',
      category: 'Programmering',
      level: 'advanced',
      thumbnail: 'https://img-c.udemycdn.com/course/750x422/567828_67d0.jpg',
      rating: 4.8,
      totalReviews: 150,
      lessons: 30,
      duration: '15 hours',
      price: 1500,
      discountPrice: 1200,
    },
    {
      id: 3,
      title: 'Data Science Basics',
      category: 'Dataanalys',
      level: 'beginner',
      thumbnail: 'https://img-c.udemycdn.com/course/750x422/950390_270f_3.jpg',
      rating: 4.2,
      totalReviews: 90,
      lessons: 15,
      duration: '8 hours',
      price: 800,
      discountPrice: 600,
    },
  ];
}
