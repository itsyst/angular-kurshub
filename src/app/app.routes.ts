import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/courses/courses.component').then(
        (m) => m.CoursesComponent
      ),
  },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./pages/course-detail/course-detail.component').then(
        (m) => m.CourseDetailComponent
      ),
  },
  {
    path: 'authors',
    loadComponent: () =>
      import('./pages/authors/authors.component').then(
        (m) => m.AuthorsComponent
      ),
  },
  {
    path: 'authors/:id',
    loadComponent: () =>
      import('./pages/author-detail/author-detail.component').then(
        (m) => m.AuthorDetailComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact-form/contact-form.component').then(
        (m) => m.ContactFormComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
