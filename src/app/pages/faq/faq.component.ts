import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { QuestionService } from '../../services/questions.service';
import { Question, FaqItem } from '../../types/question';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  private questionsService = inject(QuestionService);

  // DEFINE WRITABLE UI STATE
  // This signal will hold our final list of FAQs with their open/closed state.
  public faqs = signal<FaqItem[]>([]);

  // FETCH SOURCE DATA (as a read-only signal)
  // This signal holds the raw data from the service.
  private sourceQuestions = toSignal(this.questionsService.getQuestions(), {
    initialValue: [] as Question[],
  });

  // INITIALIZE UI STATE FROM SOURCE DATA (using an effect)
  // This effect runs automatically when `sourceQuestions` receives its data.
  // It populates our writable `faqs` signal. This is defined directly as a
  // class property, avoiding the need for a constructor.
  private initializeFaqs = effect(() => {
    const questions = this.sourceQuestions(); // Read the value from the source signal
    if (questions.length > 0) {
      this.faqs.set(
        questions.map(q => ({ ...q, isOpen: false }))
      );
    }
  });

  toggleFaq(id: number): void {

    this.faqs.update(currentFaqs =>
      currentFaqs.map(item =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  }
}
