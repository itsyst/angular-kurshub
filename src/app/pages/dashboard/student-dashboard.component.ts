import { CommonModule, DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Child Components and Pipes
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { ProgressComponent } from '../../components/progress/progress.component';
import { FilterByProgressPipe } from '../../pipes/filter-by-progress.pipe';
import { TabsComponent } from '../../components/tabs/tabs.component'; // Import TabsComponent

// Services & Data Types
import { CoursesService } from '../../services/courses.service';
import { StudentsService } from '../../services/students.service';
import { EnrichedEnrollment } from '../../types/course';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    AvatarComponent,
    ProgressComponent,
    FilterByProgressPipe,
    TabsComponent,
    DatePipe
  ],
  templateUrl: './student-dashboard.component.html',
})
export class StudentDashboardComponent {
  private studentsService = inject(StudentsService);
  private coursesService = inject(CoursesService);

  public activeTab = signal<'in-progress' | 'completed' | 'all'>('in-progress');

  public student = toSignal(this.studentsService.getStudentById('s1'), {
    initialValue: undefined,
  });
  private allCourses = toSignal(this.coursesService.getCourses(), {
    initialValue: [],
  });

  public enrolledCourses = computed<EnrichedEnrollment[]>(() => {
    const currentStudent = this.student();
    const courses = this.allCourses();
    if (!currentStudent || courses.length === 0) return [];

    return currentStudent.enrolledCourses.map((enrollment) => {
      const courseDetails = courses.find(
        (c) => String(c.id) === enrollment.courseId
      ); // Fix: String(c.id)
      const now = new Date();
      const mockLastAccessed = new Date(
        now.getTime() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
      );

      return {
        ...enrollment,
        course: courseDetails, // Attach the full course details
        completedDate: enrollment.progress === 100 ? new Date() : undefined,
        lastAccessedDate: mockLastAccessed,
      };
    });
  });

  // --- Computed Statistics ---
  public enrolledCount = computed(() => this.enrolledCourses().length);
  public completedCount = computed(
    () => this.enrolledCourses().filter((e) => e.progress === 100).length
  );
  public inProgressCount = computed(
    () => this.enrolledCourses().filter((e) => e.progress < 100).length
  );
  public hoursSpent = computed(() => '16.5'); // Mock data
  public coursesCompletedStat = computed(
    () => `${this.completedCount()}/${this.enrolledCount()}`
  );
  public coursesCompletedProgress = computed(() =>
    this.enrolledCount() > 0
      ? (this.completedCount() / this.enrolledCount()) * 100
      : 0
  );

  public recommendedCourses = computed(() => {
    return this.allCourses().slice(2, 4);
  });

  getRelativeTime(date: Date | undefined): string {
    if (!date) return 'Aldrig'; // Never accessed

    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'idag';
    } else if (diffDays === 1) {
      return 'igår';
    } else if (diffDays <= 30) {
      return `${diffDays} dagar sedan`;
    } else if (diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30);
      return `${diffMonths} ${diffMonths === 1 ? 'månad' : 'månader'} sedan`;
    } else {
      return date.toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  }

  onTabChange(tabValue: string): void {
    this.activeTab.set(tabValue as 'in-progress' | 'completed' | 'all');
  }
}
