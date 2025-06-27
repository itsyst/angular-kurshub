import { Component, computed, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationState } from '../../types/states';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  // Modern inputs
  readonly totalItems = input.required<number>();
  readonly pageSize = input<number>(6);
  readonly currentPage = input<number>(1);
  readonly maxVisiblePages = input<number>(7);
  readonly showInfo = input<boolean>(true);
  readonly showPageSizeSelector = input<boolean>(true);
  readonly pageSizeOptions = input<number[]>([6, 12, 24, 48, 96]);

  // Modern outputs
  readonly pageChange = output<number>();
  readonly pageSizeChange = output<number>();
  readonly stateChange = output<PaginationState>();

  // Internal state for hover effects
  private readonly hoveredPage = signal<number | null>(null);

  // Computed properties
  readonly totalPages = computed(() =>
    Math.ceil(this.totalItems() / this.pageSize())
  );

  readonly startIndex = computed(() =>
    (this.currentPage() - 1) * this.pageSize()
  );

  readonly endIndex = computed(() =>
    Math.min(this.startIndex() + this.pageSize(), this.totalItems())
  );

  readonly visiblePages = computed(() => {
    const current = this.currentPage();
    const total = this.totalPages();
    const maxVisible = this.maxVisiblePages();

    if (total <= maxVisible) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: number[] = [];
    const delta = Math.floor(maxVisible / 2);

    // Always include first page
    pages.push(1);

    // Calculate range around current page
    const start = Math.max(2, current - delta);
    const end = Math.min(total - 1, current + delta);

    // Add ellipsis if there's a gap after first page
    if (start > 2) pages.push(-1);

    // Add pages around current page
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipsis if there's a gap before last page
    if (end < total - 1) pages.push(-1);

    // Always include last page (if more than 1 page)
    if (total > 1) pages.push(total);

    return pages;
  });

  readonly canGoPrevious = computed(() => this.currentPage() > 1);
  readonly canGoNext = computed(() => this.currentPage() < this.totalPages());
  readonly hasMultiplePages = computed(() => this.totalPages() > 1);

  // Event handlers
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages() && page !== this.currentPage()) {
      this.emitPageChange(page);
    }
  }

  goToPrevious(): void {
    if (this.canGoPrevious()) {
      this.emitPageChange(this.currentPage() - 1);
    }
  }

  goToNext(): void {
    if (this.canGoNext()) {
      this.emitPageChange(this.currentPage() + 1);
    }
  }

  onPageSizeChange(event: Event): void {
    const newSize = +(event.target as HTMLSelectElement).value;
    this.pageSizeChange.emit(newSize);
    this.emitStateChange(1, newSize); // Reset to first page
  }

  setHoveredPage(page: number | null): void {
    this.hoveredPage.set(page);
  }

  isEllipsis(page: number): boolean {
    return page === -1;
  }

  isCurrentPage(page: number): boolean {
    return page === this.currentPage();
  }

  isHovered(page: number): boolean {
    return this.hoveredPage() === page;
  }

  private emitPageChange(page: number): void {
    this.pageChange.emit(page);
    this.emitStateChange(page, this.pageSize());
  }

  private emitStateChange(page: number, pageSize: number): void {
    this.stateChange.emit({
      currentPage: page,
      pageSize,
      totalItems: this.totalItems()
    });
  }
}
