import { Component, OnInit } from '@angular/core';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { UserService } from '../../service/user.service';
import { RouterLink } from '@angular/router';
import { PolicyService } from '../../service/policy.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CustomerNavbarComponent, RouterLink],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  name: string;
  username: string;

  activePolicies: string;
  expiredPolicies: string;
  claimsFiled: number;

  constructor(
    private userService: UserService,
    private policyService: PolicyService
  ) {
    this.username = localStorage?.getItem('username');
    userService.getNameByUsername(this.username).subscribe({
      next: (data) => {
        this.name = data.msg;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    let token = localStorage.getItem('token');

    this.policyService.getNumberOfActivePolicies(token).subscribe({
      next: (data) => {
        this.activePolicies = data.msg;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.policyService.getNumberOfExpiredPolicies(token).subscribe({
      next: (data) => {
        this.expiredPolicies = data.msg;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.policyService.getNumberOfClaimsFiled(token).subscribe({
      next: (data) => {
        console.log(data);
        
        this.claimsFiled = data.msg;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
