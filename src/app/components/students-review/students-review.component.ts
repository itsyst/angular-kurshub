import { Component, computed, inject } from '@angular/core';
import { TitleCasePipe } from '../../pipes/title-case.pipe';
import { StudentsService } from '../../services/students.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Student } from '../../types/student';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-students-review',
  imports: [TitleCasePipe, TestimonialCardComponent],
  templateUrl: './students-review.component.html'
})
export class StudentsReviewComponent {
  private studentService = inject(StudentsService);

  public allStudents = toSignal(this.studentService.getStudents(), {
    initialValue: [] as Student[],
  });

  public testimonials = computed(() => {
    const completedStudents = this.allStudents().filter(student =>
      student.enrolledCourses.some(ec => ec.progress === 100) &&
      student.testimonials.length > 0
    );
    // Shuffle and pick 3 unique
    const shuffled = [...completedStudents].sort(() => Math.random() - 0.5).slice(0, 3);

    return shuffled.map((student, i) => ({
      id: student.id,
      name: student.name,
      avatar: student.avatar,
      role: student.role,
      testimonials: student.testimonials
    }));
  });
}
