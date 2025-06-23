import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BadgeComponent } from '../../components/badge/badge.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { authors } from '../../data/authors';
import { comments } from '../../data/comments';
import { CoursesService } from '../../services/courses.service';
import { Author } from '../../types/author';
import { EnrichedComment } from '../../types/comment';
import { Course } from '../../types/course';
import { students } from './../../data/students';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, TabsComponent, BadgeComponent],
})
export class CourseDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(CoursesService);

  // 1. Convert the main data stream (course by ID) to a signal.
  public course = toSignal<Course | undefined>(
    this.route.paramMap.pipe(
      switchMap((params) => {
        const courseId = Number(params.get('id'));
        return isNaN(courseId)
          ? of(undefined)
          : this.service.getCourseById(courseId);
      })
    )
  );

  // 2. Create computed signals for all data derived from the course.
  // These are memoized and only recalculate when the course() signal changes.
  public author = computed<Author | undefined>(() => {
    const currentCourse = this.course();
    return currentCourse
      ? authors.find((a) => a.id === currentCourse.authorId)
      : undefined;
  });

  public courseComments = computed<EnrichedComment[]>(() => {
    const courseId = this.course()?.id;
    if (!courseId) return [];

    const filteredComments = comments.filter((c) => c.courseId === courseId);
    return filteredComments.map((comment) => {
      const student = students.find((s) => s.id === comment.userId);
      return {
        ...comment,
        authorName: student?.name || 'Anonymous User',
        authorAvatar: student?.avatar || 'https://i.pravatar.cc/150',
      };
    });
  });

  public ratingDistribution = computed(() => {
    const distribution: {
      [key: number]: { count: number; percentage: number };
    } = {
      1: { count: 0, percentage: 0 },
      2: { count: 0, percentage: 0 },
      3: { count: 0, percentage: 0 },
      4: { count: 0, percentage: 0 },
      5: { count: 0, percentage: 0 },
    };
    const comments = this.courseComments();
    if (comments.length === 0) return distribution;

    comments.forEach((c) => distribution[c.rating].count++);
    Object.values(distribution).forEach(
      (d) => (d.percentage = (d.count / comments.length) * 100)
    );
    return distribution;
  });

  // 3. For related courses, we need all courses. Fetch them once.
  private allCourses = toSignal(this.service.getCourses(), {
    initialValue: [] as Course[],
  });

  public relatedCourses = computed<Course[]>(() => {
    const currentCourse = this.course();

    if (!currentCourse) return [];
    return this.allCourses()
      .filter(
        (c) =>
          c.category === currentCourse.category && c.id !== currentCourse.id
      )
      .slice(0, 3);
  });

  public enrolledCount = computed<number>(() => {
    const courseIdAsString = String(this.course()?.id);

    if (!courseIdAsString) return 0;
    return students.filter((s) =>
      s.enrolledCourses.some((e) => e.courseId === courseIdAsString)
    ).length;
  });

  // 4. Manage UI state (like the active tab) with a writable signal.
  public currentTab = signal('overview');

  public courseBenefits = computed(() => {
    const benefits = [
      { id: 1, label: 'Full livstidstillgång' },
      { id: 2, label: 'Tillgång via mobil och TV' },
      { id: 3, label: 'Certifikat vid slutförande' },
      { id: 4, label: '30 dagars pengarna-tillbaka-garanti' },
      { id: 5, label: 'Tillgång till exklusivt innehåll' },
    ];

    return benefits;
  });

  public authorCourseCount = computed(() => {
    return this.author()?.courses?.length ?? 0;
  });

  onTabChange(tabValue: string): void {
    this.currentTab.set(tabValue);
  }
}
