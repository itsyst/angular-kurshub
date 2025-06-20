import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { BadgeComponent } from '../../components/badge/badge.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { AuthorService } from '../../services/authors.service';
import { CoursesService } from '../../services/courses.service';
import { Author, Expertise } from '../../types/author';
import { Course } from '../../types/course';
import { Nl2brPipe } from '../../pipes/nl2br.pipe';

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
    Nl2brPipe
  ],
  templateUrl: './author-detail.component.html'
})
export class AuthorDetailComponent implements OnInit {
  author: Author | null = null;
  authorCourses: Course[] = [];
  totalStudents = 0;
  currentTab: string = 'about';

  private route = inject(ActivatedRoute);
  private authors = inject(AuthorService);
  private courses = inject(CoursesService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';

    const foundAuthor = this.authors.findAuthorById(id);
    if (foundAuthor) {
      this.author = foundAuthor;

      const allCourses = this.courses.getCourses();
      this.authorCourses = allCourses.filter((course) =>
        foundAuthor.courses.includes(String(course.id))
      );
    }
  }

  onTabChange(tabValue: string) {
    this.currentTab = tabValue;
  }

  getExpertiseDomains(expertises: Expertise[]): string {
    return expertises.map((e) => e.domain).join(', ');
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }
}
