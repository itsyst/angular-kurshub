import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AvatarComponent } from '../../components/avatar/avatar.component';
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
  imports: [
    CommonModule,
    RouterLink,
    TabsComponent,
    BadgeComponent,
    AvatarComponent,
  ],
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

    const filteredComments = comments.filter((c) => c.courseId === String(courseId));
    return filteredComments.map((comment) => {
      const student = students.find((s) => s.id === comment.userId);
      return {
        ...comment,
        userName: student?.name || 'Anonymous User',
        userAvatar: student?.avatar || 'https://i.pravatar.cc/150',
      };
    });
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

  public ratingDistribution = computed(() => {
    const distribution: { [key: number]: { count: number; percentage: number } } = {
      1: { count: 0, percentage: 0 }, 2: { count: 0, percentage: 0 },
      3: { count: 0, percentage: 0 }, 4: { count: 0, percentage: 0 },
      5: { count: 0, percentage: 0 }
    };

    const courseId = this.course()?.id;
    if (!courseId) return distribution;

    const courseIdAsString = String(courseId);

    // 1. Find all ratings derived from the progress of enrolled students
    const ratingsFromProgress = students
      .map(student => {
        const enrollment = student.enrolledCourses.find(e => e.courseId === courseIdAsString);
        return enrollment ? this.progressToRating(enrollment.progress) : null;
      })
      .filter((rating): rating is number => rating !== null);

    const totalRatings = ratingsFromProgress.length;
    if (totalRatings === 0) return distribution;

    // 2. Count the occurrences of each rating
    for (const rating of ratingsFromProgress) {
      if (distribution[rating]) {
        distribution[rating].count++;
      }
    }

    // 3. Calculate the percentage for each rating
    for (const key in distribution) {
      const ratingData = distribution[key];
      ratingData.percentage = (ratingData.count / totalRatings) * 100;
    }

    return distribution;
  });

  /**
   * Converts a student's course progress percentage into a 1-5 star rating.
   * @param progress The student's progress in the course (0-100).
   * @returns A rating from 1 to 5.
   */
  private progressToRating(progress: number): number {
    if (progress >= 90) return 5;
    if (progress >= 75) return 4;
    if (progress >= 50) return 3;
    if (progress >= 25) return 2;
    return 1;
  }

  onTabChange(tabValue: string): void {
    this.currentTab.set(tabValue);
  }
}
