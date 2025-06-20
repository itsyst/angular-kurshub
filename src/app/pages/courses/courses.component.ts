import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Import the previously converted components
// import {
//   AccordionComponent,
//   AccordionItem,
// } from '../components/accordion.component';
// import { SelectComponent, SelectOption } from '../components/select.component';
import { CourseCardComponent } from "../../components/course-card/course-card.component";
import { SelectComponent, SelectOption } from '../../components/select/select.component';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../types/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CourseCardComponent,
    SelectComponent
  ],
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  // Component state properties
  searchTerm: string = '';
  selectedCategory: string | null = null;
  selectedLevel: string | null = null;
  selectedRating: number | null = null;
  sortOption: string = 'popular';
  showMobileFilters: boolean = false;
  options: any[] = [];

  // Data properties
  courses: Course[] = [];
  categories: string[] = [];
  filteredCourses: Course[] = [];
  sortedCourses: Course[] = [];

  // Configuration properties
  sortOptions: SelectOption[] = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  filterAccordionItems: any[] = [];

  constructor (service: CoursesService) {
    // Initialize courses from service
    this.courses = service.getCourses();
    this.filteredCourses = [...this.courses];
    this.sortedCourses = [...this.courses];
  }

  ngOnInit(): void {
    this.loadCourses();
    this.setupFilters();
    this.applyFilters();
  }

  // Business logic methods
  private loadCourses(): void {
    // Service call would go here
    // this.courseService.getCourses().subscribe(courses => {
    //   this.courses = courses;
    //   this.extractCategories();
    //   this.setupFilters();
    //   this.applyFilters();
    // });

    this.extractCategories();
  }

  private extractCategories(): void {
    this.categories = Array.from(
      new Set(
        this.courses
          .map((course) => course.category)
          .filter((c): c is string => typeof c === 'string')
      )
    );
  }

  private setupFilters(): void {
    this.filterAccordionItems = [
      {
        id: 'category',
        title: 'Category',
        content: 'Category filters',
      },
      {
        id: 'level',
        title: 'Level',
        content: 'Level filters',
      },
      {
        id: 'rating',
        title: 'Rating',
        content: 'Rating filters',
      },
    ];
  }

  private applyFilters(): void {
    this.filteredCourses = this.courses.filter((course) =>
      this.matchesFilters(course)
    );
    this.applySorting();
  }

  private matchesFilters(course: Course): boolean {
    // Search term filter
    if (this.searchTerm && !this.matchesSearchTerm(course)) {
      return false;
    }

    // Category filter
    if (this.selectedCategory && course.category !== this.selectedCategory) {
      return false;
    }

    // Level filter
    if (this.selectedLevel && course.level !== this.selectedLevel) {
      return false;
    }

    // Rating filter
    if (
      this.selectedRating &&
      (course.rating === undefined || course.rating < this.selectedRating)
    ) {
      return false;
    }

    return true;
  }

  private matchesSearchTerm(course: Course): boolean {
    const term = this.searchTerm.toLowerCase();
    return (
      (!!course.title && course.title.toLowerCase().includes(term)) ||
      (!!course.description && course.description.toLowerCase().includes(term))
    );
  }

  private applySorting(): void {
    this.sortedCourses = [...this.filteredCourses].sort((a, b) => {
      return this.getSortComparison(a, b);
    });
  }

  private getSortComparison(a: Course, b: Course): number {
    switch (this.sortOption) {
      case 'popular':
        return (b.totalReviews ?? 0) - (a.totalReviews ?? 0);
      case 'newest':
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case 'price-low':
        return this.getEffectivePrice(a) - this.getEffectivePrice(b);
      case 'price-high':
        return this.getEffectivePrice(b) - this.getEffectivePrice(a);
      case 'rating':
        return (b.rating ?? 0) - (a.rating ?? 0);
      default:
        return 0;
    }
  }

  private getEffectivePrice(course: Course): number {
    return course.discountPrice ?? course.price ?? 0;
  }

  // Event handlers (called from template)
  onSearchChange(): void {
    this.applyFilters();
  }

  onSortChange(option: any | null): void {
    if (option) {
      this.sortOption = option.value;
      this.applySorting();
    }
  }

  toggleCategory(category: string): void {
    this.selectedCategory =
      this.selectedCategory === category ? null : category;
    this.applyFilters();
  }

  toggleLevel(level: string): void {
    this.selectedLevel = this.selectedLevel === level ? null : level;
    this.applyFilters();
  }

  toggleRating(rating: number): void {
    this.selectedRating = this.selectedRating === rating ? null : rating;
    this.applyFilters();
  }

  clearAllFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = null;
    this.selectedLevel = null;
    this.selectedRating = null;
    this.applyFilters();
  }

  toggleMobileFilters(): void {
    this.showMobileFilters = !this.showMobileFilters;
  }

  enrollCourse(course: Course): void {
    // Handle course enrollment logic
    console.log('Enrolling in course:', course.title);
    // This would typically call a service method
    // this.enrollmentService.enrollInCourse(course.id);
  }

  // Utility methods for template
  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  onImageError(event: any): void {
    event.target.src = '/assets/images/course-placeholder.jpg';
  }

  trackByCourse(index: number, course: Course): string {
    return String(course.id);
  }

  // Computed properties for template
  get hasResults(): boolean {
    return this.sortedCourses.length > 0;
  }

  get resultsCount(): number {
    return this.sortedCourses.length;
  }

  get levels(): string[] {
    return ['beginner', 'intermediate', 'advanced'];
  }

  get ratingOptions(): number[] {
    return [4.5, 4, 3.5, 3];
  }
}
