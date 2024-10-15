import { Component } from '@angular/core';
import { PolicyService } from '../../../../service/policy.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-claim-vehicle-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './claim-vehicle-details.component.html',
  styleUrl: './claim-vehicle-details.component.css'
})
export class ClaimVehicleDetailsComponent {
  vehicleName: string;
  registrationNo: string;
  registrationYear: number;
  vehiclePrice: number;

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    let policyId = localStorage.getItem('claimPolicyId');
    let token = localStorage.getItem('token');
    this.policyService
      .getVehicleByPolicyId(policyId, token)
      .subscribe((vehicle) => {
        this.vehicleName = vehicle.manufacturerName + ' ' + vehicle.modelName;
        this.registrationNo = vehicle.registrationNo;
        this.registrationYear = vehicle.yearOfPurchase;
        this.vehiclePrice = vehicle.basePrice;
      });
  }
}
