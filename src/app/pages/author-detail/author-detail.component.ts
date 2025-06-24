import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';
import { AuthorsService } from '../../services/authors.service';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../types/course';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BadgeComponent,
    AvatarComponent,
    TabsComponent,
    CourseCardComponent,
    Nl2brPipe,
  ],
  templateUrl: './author-detail.component.html',
})
export class AuthorDetailComponent {
  private route = inject(ActivatedRoute);
  private authorsService = inject(AuthorsService);
  private courseService = inject(CoursesService);

  public currentTab = signal('about');

  public author = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) => {
        const authorId = params.get('id');
        return authorId
          ? this.authorsService.getAuthorById(authorId)
          : of(undefined);
      })
    )
  );

  private allCourses = toSignal(this.courseService.getCourses(), {
    initialValue: [] as Course[],
  });

  public authorCourses = computed(() => {
    const authorId = this.author()?.id;
    if (!authorId) return [];
    return this.allCourses().filter((course) => course.authorId === authorId);
  });

  public totalStudents = computed(() => {
    return this.authorCourses().reduce(
      (sum, course) => sum + (course.students ?? 0),
      0
    );
  });

  public expertiseDomains = computed(() => {
    const expertise = this.author()?.expertise;
    if (!expertise) return '';
    return expertise.map((e) => e.domain).join(', ');
  });

  onTabChange(tabValue: string) {
    this.currentTab.set(tabValue);
  }
}
