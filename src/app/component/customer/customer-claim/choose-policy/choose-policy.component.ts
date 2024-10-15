import { Component } from '@angular/core';
import { UserService } from '../../../../service/user.service';
import { PolicyService } from '../../../../service/policy.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { CustomerNavbarComponent } from "../../customer-navbar/customer-navbar.component";

@Component({
  selector: 'app-choose-policy',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, CustomerNavbarComponent],
  templateUrl: './choose-policy.component.html',
  styleUrl: './choose-policy.component.css'
})
export class ChoosePolicyComponent {
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

  onFileClaim(id: any) {
    localStorage.setItem('claimPolicyId', id);
    this.router.navigateByUrl('/claim-documents/' + id);
  }
}
