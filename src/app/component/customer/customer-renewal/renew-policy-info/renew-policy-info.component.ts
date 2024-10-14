import { Component } from '@angular/core';
import { PolicyService } from '../../../../service/policy.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-renew-policy-info',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './renew-policy-info.component.html',
  styleUrl: './renew-policy-info.component.css'
})
export class RenewPolicyInfoComponent {
  id: any;
  buyingDate: string;
  policyRequestStatus: string;
  policyType: string;
  coverageAmount: number;
  premiumAmount: number;
  termLength: number;
  policyStatus: string;
  vehicleType: string;
  vehicleName: string;
  basePrice: number;
  registrationNo: string;

  constructor(
    private policyService: PolicyService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');

    let token = localStorage.getItem('token');
    this.policyService.getActivePolicyById(this.id, token).subscribe({
      next: (data) => {
        this.buyingDate = data.buyingDate;
        this.policyRequestStatus = data.policyRequestStatus;
        this.policyType = data.policyType;
        this.coverageAmount = data.coverageAmount;
        this.premiumAmount = data.premiumAmount;
        this.termLength = data.termLength;
        this.policyStatus = data.policyStatus;
        this.vehicleType = data.vehicleType;
        this.vehicleName = data.manufacturerName + ' ' + data.modelName;
        this.basePrice = data.basePrice;
        this.registrationNo = data.registrationNo;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
