import { Pipe, PipeTransform } from '@angular/core';
import { EnrichedEnrollment } from '../types/course';

@Pipe({
  name: 'filterByProgress',
  standalone: true,
})
export class FilterByProgressPipe implements PipeTransform {
  transform(
    enrollments: EnrichedEnrollment[],
    status: 'in-progress' | 'completed' | 'all'
  ): EnrichedEnrollment[] {
    if (!enrollments) return [];
    switch (status) {
      case 'in-progress':
        return enrollments.filter(e => e.progress < 100);
      case 'completed':
        return enrollments.filter(e => e.progress === 100);
      case 'all':
      default:
        return enrollments;
    }
  }
}
