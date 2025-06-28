import { Component, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeVariant, badgeVariants } from '../../common/utils/badge-variants';
import { combineAll } from '../../common/utils/combine-all';
import { ConfigLevel, CourseLevel } from '../../types/course';

type BadgeShape = 'pill' | 'circle';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: '{{ displayText }} <ng-content></ng-content>',
  host: {
    class: 'inline-flex items-center px-2.5 py-0.5 text-xs font-semibold transition-colors rounded text-gray-400'
  }
})
export class BadgeComponent implements OnChanges {
  @Input() variant: BadgeVariant = 'default';
  @Input() level: CourseLevel | string | null = null;
  @Input() shape: BadgeShape = 'pill';
  @Input() className: string = '';

  public displayText: string = '';

  private readonly levelConfig: Record<CourseLevel, ConfigLevel> = {
    [CourseLevel.BEGINNER]: {
      color: 'bg-orange-500 text-white border border-orange-600',
      aliases: [CourseLevel.BEGINNER, 'Nybörjare', 'beginner']
    },
    [CourseLevel.INTERMEDIATE]: {
      color: 'bg-green-500 text-white border border-green-600',
      aliases: [CourseLevel.INTERMEDIATE, 'Medelnivå', 'intermediate']
    },
    [CourseLevel.ADVANCED]: {
      color: 'bg-red-500 text-white border border-red-600',
      aliases: [CourseLevel.ADVANCED, 'Avancerad', 'advanced']
    }
  };

  private readonly shapeClasses: Record<BadgeShape, string> = {
    pill: 'rounded-full px-3 py-1',
    circle: 'rounded-full w-6 h-6 px-0 py-0 flex items-center justify-center'
  };

  @HostBinding('class')
  get classes(): string {
    const normalizedLevel = this.normalizeLevel(this.level);
    const levelClasses = normalizedLevel ? this.levelConfig[normalizedLevel].color : '';
    const colorAndVariantClasses = levelClasses || badgeVariants[this.variant];
    const shapeClasses = this.shapeClasses[this.shape];

    return combineAll(colorAndVariantClasses, shapeClasses, this.className);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['level']) {
      this.updateDisplayText();
    }
  }

  private normalizeLevel(level: CourseLevel | string | null): CourseLevel | null {
    if (!level) return null;

    if (Object.values(CourseLevel).includes(level as CourseLevel)) {
      return level as CourseLevel;
    }

    const levelString = level.toString().toLowerCase();

    for (const [courseLevel, config] of Object.entries(this.levelConfig)) {
      if (config.aliases.some(alias =>
        alias.toString().toLowerCase() === levelString ||
        levelString.includes(alias.toString().toLowerCase())
      )) {
        return courseLevel as CourseLevel;
      }
    }

    return null;
  }

  private updateDisplayText(): void {
    if (!this.level) {
      this.displayText = '';
      return;
    }

    const normalizedLevel = this.normalizeLevel(this.level);
    this.displayText = normalizedLevel || this.level.toString();
  }
}
