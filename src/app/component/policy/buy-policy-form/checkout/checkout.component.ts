import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PolicyService } from '../../../../service/policy.service';
import { CustomerService } from '../../../../service/customer.service';
import { Route, Router } from '@angular/router';

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

  manufacturerName: string;
  modelName: string;
  variant: string;
  yearOfPurchase: number;
  basePrice: number;
  previousClaim: string;
  registrationNo: string;
  vehicleType: string;
  fuelType: string;
  transmissionType: string;
  vehicleCondition: string;
  zoneType: string;

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

    this.policyService.vehicleInfo$.subscribe((vehicle) => {
      this.manufacturerName = vehicle.manufacturerName;
      this.modelName = vehicle.modelName;
      this.variant = vehicle.variant;
      this.yearOfPurchase = vehicle.yearOfPurchase;
      this.basePrice = vehicle.basePrice;
      this.previousClaim = vehicle.previousClaim;
      this.registrationNo = vehicle.registrationNo;
      this.fuelType = vehicle.fuelType;
      this.transmissionType = vehicle.transmissionType;
      this.vehicleCondition = vehicle.vehicleCondition;
      this.zoneType = vehicle.zoneType;
      this.vehicleType = vehicle.vehicleType;
      this.vehicleName = vehicle.manufacturerName + ' ' + vehicle.modelName;
    });

    this.policyService.policyInfo$.subscribe((policy) => {
      this.policyType = policy.mainPolicyType;
      this.coverageAmount = '₹ '+policy.coverageAmount;
      this.premiumAmount = '₹ '+policy.premiumAmount;
      this.termLength = policy.termLength;
    });
  }

  onBuy(policyType: any) {
    let vehicleDetails = {
      manufacturerName: this.manufacturerName,
      modelName: this.modelName,
      variant: this.variant,
      yearOfPurchase: this.yearOfPurchase,
      basePrice: this.basePrice,
      previousClaim: this.previousClaim,
      registrationNo: this.registrationNo,
      fuelType: this.fuelType,
      transmissionType: this.transmissionType,
      vehicleCondition: this.vehicleCondition,
      zoneType: this.zoneType,
      vehicleType: this.vehicleType,
    };

    let token = localStorage.getItem('token');
    this.policyService.buyPolicy(vehicleDetails, policyType, token).subscribe({
      next: (data) => {
        this.router.navigateByUrl('/buy-msg');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
