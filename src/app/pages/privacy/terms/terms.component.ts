import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../../components/icon/icon.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { TermsService } from '../../../services/terms.service';
import { BadgeComponent } from '../../../components/badge/badge.component';

interface TermsSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  category: 'legal' | 'usage' | 'rights' | 'liability';
  content: string;
  keyPoints: string[];
  userResponsibilities?: string[];
  examples?: string[];
}

@Component({
  selector: 'app-terms-of-service',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent, BadgeComponent],
  templateUrl: './terms.component.html',
})
export class TermsOfServiceComponent {
  private termsService = inject(TermsService);

  public readonly selectedSection = signal<string>('');
  public readonly activeFilter = signal<
    'all' | 'legal' | 'usage' | 'rights' | 'liability'
  >('all');

  public readonly lastUpdated = signal<Date>(new Date('2025-06-24'));
  public readonly effectiveDate = signal<Date>(new Date('2025-07-01'));
  public readonly currentVersion = signal<string>('3.1');

  public readonly allTerms = toSignal(this.termsService.getAllTerms(), {
    initialValue: [] as TermsSection[],
  });

  public readonly filteredSections = computed(() => {
    const filter = this.activeFilter();
    const sections = this.allTerms();

    if (filter === 'all') {
      return sections;
    }

    return sections.filter((section) => section.category === filter);
  });

  public selectSection(sectionId: string): void {
    this.selectedSection.set(
      this.selectedSection() === sectionId ? '' : sectionId
    );
  }

  public setFilter(
    filter: 'all' | 'legal' | 'usage' | 'rights' | 'liability'
  ): void {
    this.activeFilter.set(filter);
  }

  public getColorClasses(color: string): Record<string, string> {
    const colorMap: Record<string, Record<string, string>> = {
      green: {
        bg: 'bg-green-600/20',
        text: 'text-green-400',
        border: 'border-green-500/30',
      },
      blue: {
        bg: 'bg-blue-600/20',
        text: 'text-blue-400',
        border: 'border-blue-500/30',
      },
      purple: {
        bg: 'bg-purple-600/20',
        text: 'text-purple-400',
        border: 'border-purple-500/30',
      },
      orange: {
        bg: 'bg-orange-600/20',
        text: 'text-orange-400',
        border: 'border-orange-500/30',
      },
      red: {
        bg: 'bg-red-600/20',
        text: 'text-red-400',
        border: 'border-red-500/30',
      },
      yellow: {
        bg: 'bg-yellow-600/20',
        text: 'text-yellow-400',
        border: 'border-yellow-500/30',
      },
    };
    return colorMap[color] || colorMap['blue'];
  }

  public getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      legal: 'blue',
      usage: 'purple',
      rights: 'orange',
      liability: 'red',
    };
    return colors[category] || 'blue';
  }

  public getCategoryName(category: string): string {
    const names: Record<string, string> = {
      legal: 'Juridiska villkor',
      usage: 'Användning',
      rights: 'Rättigheter',
      liability: 'Ansvar',
    };
    return names[category] || 'Allmänt';
  }
}
