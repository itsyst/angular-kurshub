import { CommonModule } from '@angular/common';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { PoliciesService } from '../../services/policies.service';
import { PolicyData } from '../../types/policy';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  templateUrl: './privacy.component.html',
})
export class PrivacyPolicyComponent {
  private readonly policyService = inject(PoliciesService);
  private readonly destroyRef = inject(DestroyRef);

  public readonly isLoading = signal<boolean>(true);
  public readonly errorMessage = signal<string | null>(null);

  // Policy data Signals
  public readonly policyData = signal<PolicyData | null>(null);
  public readonly lastUpdated = computed(() => {
    const data = this.policyData();
    return data ? new Date(data.lastUpdated) : new Date();
  });
  public readonly effectiveDate = computed(() => {
    const data = this.policyData();
    return data ? new Date(data.effectiveDate) : new Date();
  });

  public readonly version = computed(() => {
    const data = this.policyData();
    return data ? data.version : '1.0';
  });

  // Computed for handling date logic
  public readonly isNewVersion = computed(() => {
    const now = new Date();
    const effective = this.effectiveDate();
    return now >= effective;
  });

  // Computed for user-friendly date display
  public readonly formattedLastUpdated = computed(() => {
    const date = this.lastUpdated();
    return date.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });
  public readonly formattedEffectiveDate = computed(() => {
    const date = this.effectiveDate();
    return date.toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  constructor () {
    // Scroll to top when component loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.loadPolicyData();
  }

  private loadPolicyData(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.policyService
      .getPolicyData()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data: PolicyData | undefined) => {
          if (data) this.policyData.set(data);
          else this.errorMessage.set('Ingen policyinformation mottagen.');

          this.isLoading.set(false);
        },
        error: (err) => {
          this.errorMessage.set(
            'Vi kunde inte hämta policyinformationen just nu. Försök gärna igen om en stund.'
          );
          this.isLoading.set(false);
          console.error('Det uppstod ett fel när policyinformationen skulle hämtas.:', err);
        },
      });
  }

  //Refresh policy data
  public refreshPolicyData(): void {
    this.loadPolicyData();
  }

  // Method for managing cookie settings
  public manageCookieSettings(): void {
    // Implementation for cookie management
    console.log('Opening cookie settings...');
    // Here we can integrate with your cookie consent system
  }

  // Method for scrolling to a specific section
  public scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // Method for opening GDPR data request
  public requestDataAccess(): void {
    // Implementation for GDPR data access request
    console.log('Begär tillgång till data...');
    // Here we can integrate with your GDPR system
  }
}
