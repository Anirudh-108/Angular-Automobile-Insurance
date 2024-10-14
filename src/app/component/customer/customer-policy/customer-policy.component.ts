import { Component, OnInit } from '@angular/core';
import { CustomerNavbarComponent } from '../customer-navbar/customer-navbar.component';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { PolicyService } from '../../../service/policy.service';

@Component({
  selector: 'app-customer-policy',
  standalone: true,
  imports: [CustomerNavbarComponent, NgFor,NgIf, RouterLink],
  templateUrl: './customer-policy.component.html',
  styleUrl: './customer-policy.component.css',
})
export class CustomerPolicyComponent implements OnInit {
  policies: any[] = [];

  constructor(private policyService: PolicyService, private router: Router) {}

  ngOnInit() {
    let token = localStorage.getItem('token');
    this.policyService.getAllActivePolicies(token).subscribe({
      next: (data) => {
        this.policies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onClick(vehicle: string) {
    this.router.navigate(['/info', vehicle]);
  }

  onView(id: number) {
    this.router.navigateByUrl('/policy-info/' + id);
  }
}
