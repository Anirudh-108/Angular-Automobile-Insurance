import { Component } from '@angular/core';
import { CustomerNavbarComponent } from '../customer-navbar/customer-navbar.component';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { PolicyService } from '../../../service/policy.service';

@Component({
  selector: 'app-customer-renewal',
  standalone: true,
  imports: [CustomerNavbarComponent, NgFor,NgIf],
  templateUrl: './customer-renewal.component.html',
  styleUrl: './customer-renewal.component.css',
})
export class CustomerRenewalComponent {
  policies: any[] = [];

  constructor(private policyService: PolicyService, private router: Router) {}

  ngOnInit() {
    let token = localStorage.getItem('token');
    this.policyService.getAllExpiredPolicies(token).subscribe({
      next: (data) => {
        this.policies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onView(id: number) {
    this.router.navigateByUrl('/renew-policy-info/' + id);
  }

  onRenew(id: string) {
    localStorage.setItem('policyId', id);
    this.router.navigateByUrl('/renew-policy-form');
  }
}
