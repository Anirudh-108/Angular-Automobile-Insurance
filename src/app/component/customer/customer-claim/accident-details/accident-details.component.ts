import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PolicyCardComponent } from '../../../policy/show-policy/policy-card/policy-card.component';
import { PolicyService } from '../../../../service/policy.service';
import { CustomerService } from '../../../../service/customer.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-accident-details',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './accident-details.component.html',
  styleUrl: './accident-details.component.css',
})
export class AccidentDetailsComponent {
  accidentDate: string;
  accidentLocation: string;
  damageAmount: number;
  description: string;
  vehicleClaimCondition: string;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  onCheckout() {
    this.customerService.setAccidentInfo(
      this.accidentDate,
      this.accidentLocation,
      this.damageAmount,
      this.description,
      this.vehicleClaimCondition
    );    
    this.router.navigateByUrl('/claim-form');
  }
}
