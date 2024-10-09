import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PolicyService } from '../../../../service/policy.service';
import { CustomerService } from '../../../../service/customer.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  name: string;
  email: string;

  vehicleName: string;
  registrationNo: string;

  policyType: string;
  coverageAmount: number;
  premiumAmount: number;
  termLength: number;

  constructor(
    private customerService: CustomerService,
    private policyService: PolicyService
  ) {}

  ngOnInit(): void {
    this.customerService.customerInfo$.subscribe((customer) => {
      this.name = customer.name;
      this.email = customer.email;
    });

    this.policyService.vehicleInfo$.subscribe((vehicle) => {
      this.vehicleName = vehicle.manufacturerName + ' ' + vehicle.modelName;
      this.registrationNo = vehicle.registrationNo;
    });

    this.policyService.policyInfo$.subscribe((policy) => {
      this.policyType = policy.mainPolicyType;
      this.coverageAmount = policy.coverageAmount;
      this.premiumAmount = policy.premiumAmount;
      this.termLength = policy.termLength;
    });
  }
}
