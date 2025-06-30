import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { policies } from '../data/policies';
import { PolicyData } from '../types/policy';

@Injectable({
  providedIn: 'root',
})
export class PoliciesService {
  public getPolicyData(): Observable<PolicyData | undefined> {
    const policy = policies.find((p) => p.isActive);
    return new Observable((observer) => {
      observer.next(policy);
      observer.complete();
    });
  }

  public updatePolicyData(updatedPolicy: PolicyData): Observable<PolicyData> {
    // Simulate updating policy data
    const index = policies.findIndex((p) => p.id === updatedPolicy.id);
    if (index !== -1) {
      policies[index] = updatedPolicy;
      return new Observable((observer) => {
        observer.next(updatedPolicy);
        observer.complete();
      });
    } else {
      throw new Error('Policy not found');
    }
  }
}
