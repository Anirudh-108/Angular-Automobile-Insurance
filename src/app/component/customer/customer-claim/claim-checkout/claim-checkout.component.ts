import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../../service/customer.service';
import { PolicyService } from '../../../../service/policy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './claim-checkout.component.html',
  styleUrl: './claim-checkout.component.css',
})
export class ClaimCheckoutComponent {
  name: string;
  email: string;

  manufacturerName: string;
  yearOfPurchase: number;
  basePrice: number;
  registrationNo: string;

  vehicleName: string;

  accidentDate: string;
  accidentLocation: string;
  damageAmount: number;
  description: string;
  vehicleClaimCondition: string;

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

    let policyId = localStorage.getItem('claimPolicyId');
    let token = localStorage.getItem('token');

    this.policyService
      .getVehicleByPolicyId(policyId, token)
      .subscribe((vehicle) => {
        this.registrationNo = vehicle.registrationNo;
        this.yearOfPurchase = vehicle.yearOfPurchase;
        this.basePrice = vehicle.basePrice;
        this.vehicleName = vehicle.manufacturerName + ' ' + vehicle.modelName;
      });

    this.customerService.accidentInfo$.subscribe((accident) => {
      this.accidentDate = accident.accidentDate;
      this.accidentLocation = accident.location;
      this.damageAmount = accident.damageAmount;
      this.description = accident.description;
      this.vehicleClaimCondition = accident.vehicleClaimCondition;
    });
  }

  onFileClaim() {
    let accidentDetails = {
      accidentDate: this.accidentDate,
      location: this.accidentLocation,
      damageAmount: this.damageAmount,
      description: this.description,
      vehicleClaimCondition: this.vehicleClaimCondition,
    };
    let policyId = localStorage.getItem('claimPolicyId');
    let token = localStorage.getItem('token');
    this.policyService.fileClaim(accidentDetails, policyId, token).subscribe({
      next: (data) => {
        localStorage.removeItem('claimPolicyId');
        this.router.navigateByUrl('/claim-msg');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onRenew(policyType: any) {
    let policyId = localStorage.getItem('policyId');
    let token = localStorage.getItem('token');
    this.policyService.renewPolicy(policyId, token).subscribe({
      next: (data) => {
        localStorage.removeItem('policyId');
        this.router.navigateByUrl('/renew-msg');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
