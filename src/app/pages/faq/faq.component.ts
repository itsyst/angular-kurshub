import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../components/icon/icon.component';
import { CategoriesService } from '../../services/categories.service';
import { QuestionService } from '../../services/questions.service';
import { Category } from '../../types/category';
import { FaqCategory, FaqItem, Question } from '../../types/question';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, IconComponent],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  private questionsService = inject(QuestionService);
  private categoriesService = inject(CategoriesService);

  // Search and filter state
  readonly searchTerm = signal<string>('');
  readonly selectedCategoryId = signal<number | null>(null);
  readonly hoveredItem = signal<number | null>(null);

  // Source data signals
  private sourceQuestions = toSignal(this.questionsService.getQuestions(), {
    initialValue: [] as Question[],
  });

  private sourceCategories = toSignal(this.categoriesService.getCategories(), {
    initialValue: [] as Category[],
  });

  // UI state signals
  public readonly faqs = signal<FaqItem[]>([]);
  public readonly categories = computed(() => this.sourceCategories());

  // Filtered FAQs based on search and category
  public readonly filteredFaqs = computed(() => {
    const allFaqs = this.faqs();
    const search = this.searchTerm().toLowerCase();
    const categoryId = this.selectedCategoryId();

    return allFaqs.filter((faq) => {
      const matchesSearch =
        !search ||
        faq.question.toLowerCase().includes(search) ||
        faq.answer.toLowerCase().includes(search);

      const matchesCategory = !categoryId || faq.categoryId === categoryId;

      return matchesSearch && matchesCategory;
    });
  });

  public readonly hasSearchResults = computed(
    () => this.filteredFaqs().length > 0
  );
  public readonly activeCategory = computed(() =>
    this.categories().find((cat) => cat.id === this.selectedCategoryId())
  );

  // Initialize FAQs from source data
  private initializeFaqs = effect(() => {
    const questions = this.sourceQuestions();
    if (questions.length > 0) {
      this.faqs.set(questions.map((q) => ({ ...q, isOpen: false })));
    }
  });

  // Event handlers
  public toggleFaq(id: number): void {
    this.faqs.update((currentFaqs) =>
      currentFaqs.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  }

  public selectCategory(categoryId: number | null): void {
    this.selectedCategoryId.set(categoryId);
    this.closeAllFaqs(); // Close all open FAQs when switching categories
  }

  public onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
    this.closeAllFaqs(); // Close all open FAQs when searching
  }

  public clearSearch(): void {
    this.searchTerm.set('');
  }

  public setHoveredItem(id: number | null): void {
    this.hoveredItem.set(id);
  }

  private closeAllFaqs(): void {
    this.faqs.update((currentFaqs) =>
      currentFaqs.map((item) => ({ ...item, isOpen: false }))
    );
  }

  // Track by function for performance
  public trackByFaq(index: number, faq: FaqItem): number {
    return faq.id;
  }

  public trackByCategory(index: number, category: FaqCategory): number {
    return category.id;
  }
}
