import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { format } from 'date-fns';
import { authors } from '../../data/authors';
import { comments } from '../../data/comments';
import { students } from '../../data/students';
import { CoursesService } from '../../services/courses.service';
import { Author } from '../../types/author';
import { Comment } from '../../types/comment';
import { Course } from '../../types/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class CourseDetailComponent {
  Array(arg0: number): any {
    throw new Error('Method not implemented.');
  }
  Math: any;
  courses: Course[];
  courseId: string;
  course: Course | null = null;
  author: Author | null = null;
  courseComments: Comment[] = [];
  relatedCourses: Course[] = [];
  enrolledCount = 0;
  activeTab: 'overview' | 'curriculum' | 'instructor' | 'reviews' = 'overview';

  constructor (private service: CoursesService, private route: ActivatedRoute) {
    this.courses = service.getCourses();
    this.courseId = this.route.snapshot.paramMap.get('id')!;

    const foundCourse = this.courses.find(
      (c) => c.id.toString() === this.courseId
    );
    if (foundCourse) {
      this.course = foundCourse;
      this.author =
      authors.find(
        (a: { id: string | number }) => a.id === foundCourse.authorId
      ) || null;
      this.courseComments = comments.filter(
        (c: Comment) => String(c.courseId) === this.courseId
      );
      this.relatedCourses = this.courses
      .filter(
        (c) => c.category === foundCourse.category && c.id !== foundCourse.id
      )
      .slice(0, 3);
      this.enrolledCount = students.filter((s: { enrolledCourses: any[] }) =>
        s.enrolledCourses.some((e) => e.courseId === this.courseId)
      ).length;
    }
  }

  curriculum = [
    {
      title: 'Komma igång',
      lessons: [
        { title: 'Introduktion till kursen', duration: '10:15', preview: true },
        { title: 'Sätta upp din miljö', duration: '15:30', preview: false },
        { title: 'Översikt över verktyg', duration: '12:45', preview: true },
      ],
    },
    {
      title: 'Kärnkoncept',
      lessons: [
        { title: 'Grundläggande principer', duration: '18:20', preview: false },
        { title: 'Förstå arkitekturen', duration: '22:15', preview: false },
        { title: 'Arbeta med komponenter', duration: '16:40', preview: false },
      ],
    },
  ];

  getEnrollmentStatus(): boolean {
    return Math.random() > 0.5;
  }

  format(date: string): string {
    return format(new Date(date), 'MMMM yyyy');
  }
}
