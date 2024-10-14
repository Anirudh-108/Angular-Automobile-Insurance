import { Component } from '@angular/core';
import { PolicyService } from '../../../service/policy.service';
import { Router } from '@angular/router';
import { CustomerNavbarComponent } from "../customer-navbar/customer-navbar.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-customer-complain',
  standalone: true,
  imports: [CustomerNavbarComponent,NgFor,NgIf],
  templateUrl: './customer-complain.component.html',
  styleUrl: './customer-complain.component.css'
})
export class CustomerComplainComponent {
  activePolicies: any[] = [];

  constructor(private policyService: PolicyService, private router: Router) {}

  ngOnInit() {
    let token = localStorage.getItem('token');
    this.policyService.getAllActivePolicies(token).subscribe({
      next: (data) => {
        this.activePolicies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onClick(vehicle: string) {
    this.router.navigate(['/info', vehicle]);
  }

  onComplain(id: number) {
    this.router.navigateByUrl('/complain-form/' + id);
  }
}
