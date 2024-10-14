import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../../../service/customer.service';
import { PolicyService } from '../../../../../service/policy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renew-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './renew-checkout.component.html',
  styleUrl: './renew-checkout.component.css',
})
export class RenewCheckoutComponent {
  name: string;
  email: string;

  manufacturerName: string;
  yearOfPurchase: number;
  basePrice: number;
  registrationNo: string;

  vehicleName: string;

  policyType: string;
  coverageAmount: string;
  premiumAmount: string;
  termLength: number;

  constructor(
    private customerService: CustomerService,
    private policyService: PolicyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerService.customerInfo$.subscribe((customer) => {
      this.name = customer.name;
      this.email = customer.email;
    });

    let policyId = localStorage.getItem('policyId');
    let token = localStorage.getItem('token');

    this.policyService
      .getVehicleByPolicyId(policyId, token)
      .subscribe((vehicle) => {
        this.registrationNo=vehicle.registrationNo;
        this.yearOfPurchase = vehicle.yearOfPurchase;
        this.basePrice = vehicle.basePrice;
        this.vehicleName = vehicle.manufacturerName + ' ' + vehicle.modelName;
      });

    this.policyService.getPolicyById(policyId,token).subscribe((policy) => {
      this.policyType = policy.policyType;
      this.coverageAmount = '₹ '+policy.coverageAmount;
      this.premiumAmount = '₹ '+policy.premiumAmount;
      this.termLength = policy.termLength;
    });
  }

  onRenew(policyType: any) {
    let policyId = localStorage.getItem('policyId');
    let token = localStorage.getItem('token');
    this.policyService.renewPolicy(policyId,token).subscribe({
      next:(data)=>{
        localStorage.removeItem('policyId');
        this.router.navigateByUrl('/renew-msg');
      },
      error:(err)=>{console.log(err);
      },
    })
  }
}
