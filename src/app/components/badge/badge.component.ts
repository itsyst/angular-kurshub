import { Component, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeVariant, badgeVariants } from '../../common/utils/badge-variants';
import { cn } from '../../common/utils/utils';

// Define a specific type for the level input for better type safety
type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
type BadgeShape = 'pill' | 'circle';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  // Use <ng-content> to allow custom text, but set default text based on level
  template: '{{ displayText }} <ng-content></ng-content>',
  host: {
    // These are the base styles for all badges
    class: 'inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors rounded text-gray-400'
  }
})
export class BadgeComponent implements OnChanges {
  @Input() variant: BadgeVariant = 'default';
  @Input() className: string = '';
  @Input() level: CourseLevel | null = null;
  @Input() shape: BadgeShape = 'pill';

  // This property will hold the text to be displayed (e.g., 'Nybörjare')
  public displayText: string = '';

  @HostBinding('class')
  get classes(): string {
    let levelClasses = '';

    // If a level is provided, determine the correct color classes
    if (this.level) {
      switch (this.level) {
        case 'beginner': levelClasses = 'bg-orange-400 text-white'; break;
        case 'intermediate': levelClasses = 'bg-green-500 text-white'; break;
        case 'advanced': levelClasses = 'bg-red-600 text-white'; break;
      }
    }

    // Use level-specific classes or fall back to the variant system
    const colorAndVariantClasses = levelClasses ? levelClasses : badgeVariants[this.variant];

    // Add shape-specific classes based on the new `shape` input ****
    const shapeClasses = {
      // For a standard pill, we use rounded-full with padding.
      'pill': 'rounded-full px-2.5 py-0.5',
      // For a circle, we use rounded-full with a fixed width and height.
      'circle': 'rounded-full w-6 h-6'
    }[this.shape];

    // Merge all classes together: color/variant, shape, and any custom classes
    return cn(colorAndVariantClasses, shapeClasses, this.className);
  }

  // Use ngOnChanges to update the display text when the level input changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['level']) {
      this.translateLevel();
    }
  }

  // Translate the level and update the internal `displayText` property
  private translateLevel(): void {
    if (!this.level) {
      this.displayText = '';
      return;
    }
    switch (this.level) {
      case 'beginner': this.displayText = 'Nybörjare'; break;
      case 'intermediate': this.displayText = 'Medel'; break;
      case 'advanced': this.displayText = 'Avancerad'; break;
      default: this.displayText = this.level;
    }
  }
}
