import { Component } from '@angular/core';
import { CustomerNavbarComponent } from "../customer-navbar/customer-navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-claim',
  standalone: true,
  imports: [CustomerNavbarComponent],
  templateUrl: './customer-claim.component.html',
  styleUrl: './customer-claim.component.css'
})
export class CustomerClaimComponent {
  constructor(private router: Router){}

  onClick(vehicle: string){
    // this.router.navigate(['/info',vehicle]);
  }
}
