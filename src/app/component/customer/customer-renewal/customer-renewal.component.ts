import { Component } from '@angular/core';
import { CustomerNavbarComponent } from '../customer-navbar/customer-navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-renewal',
  standalone: true,
  imports: [CustomerNavbarComponent],
  templateUrl: './customer-renewal.component.html',
  styleUrl: './customer-renewal.component.css',
})
export class CustomerRenewalComponent {
  constructor(private router: Router) {}

  onClick(vehicle: string) {
    this.router.navigate(['/info', vehicle]);
  }
}
