import { Component } from '@angular/core';
import { CustomerNavbarComponent } from "../customer-navbar/customer-navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-policy',
  standalone: true,
  imports: [CustomerNavbarComponent],
  templateUrl: './customer-policy.component.html',
  styleUrl: './customer-policy.component.css'
})
export class CustomerPolicyComponent {
  constructor(private router: Router){}

  onClick(vehicle: string){
    this.router.navigate(['/info',vehicle]);
  }
}
