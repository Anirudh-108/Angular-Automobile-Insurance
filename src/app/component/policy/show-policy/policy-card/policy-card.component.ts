import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../../../service/policy.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-policy-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './policy-card.component.html',
  styleUrl: './policy-card.component.css',
})
export class PolicyCardComponent implements OnInit {
  policy_type: string;
  coverage_amount: number;
  premium_amount: number;
  term_length: string;
  description: string;

  constructor(private policyService: PolicyService, private router: Router) {}

  ngOnInit(): void {
    let vehicleDetails = {
      vehicleType: '',
      manufacturerName: '',
      modelName: '',
      variant: '',
      basePrice: 0,
      fuelType: '',
      transmissionType: '',
      previousClaim: false,
      vehicleCondition: '',
      yearOfPurchase: 0,
      zoneType: '',
      registrationNo: '',
    };

    let policyType: string;

    this.policyService.vehicleInfo$.subscribe((vehicle) => {
      vehicleDetails.vehicleType = vehicle.vehicleType;
      vehicleDetails.manufacturerName = vehicle.manufacturerName;
      vehicleDetails.modelName = vehicle.modelName;
      vehicleDetails.variant = vehicle.variant;
      vehicleDetails.basePrice = vehicle.basePrice;
      vehicleDetails.fuelType = vehicle.fuelType;
      vehicleDetails.transmissionType = vehicle.transmissionType;
      vehicleDetails.previousClaim = vehicle.previousClaim;
      vehicleDetails.vehicleCondition = vehicle.vehicleCondition;
      vehicleDetails.yearOfPurchase = vehicle.yearOfPurchase;
      vehicleDetails.zoneType = vehicle.zoneType;
      vehicleDetails.registrationNo = vehicle.registrationNo;

      policyType = vehicle.policyType;
    });

    this.policyService.showPolicy(vehicleDetails, policyType).subscribe({
      next: (data) => {
        console.log(data);
        this.policy_type = data.policyType;
        this.coverage_amount = data.coverageAmount;
        this.premium_amount = data.premiumAmount;
        this.term_length = data.termLength;
        this.description = data.description;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onBuy() {
    if (localStorage.getItem('token') == undefined) {
      localStorage.setItem('goToUrl', '/upload-documents');
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/upload-documents');
    }
  }
}
