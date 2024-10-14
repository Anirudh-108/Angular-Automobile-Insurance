import { Component } from '@angular/core';
import { PolicyService } from '../../../../../service/policy.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-renew-vehicle-info',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './renew-vehicle-info.component.html',
  styleUrl: './renew-vehicle-info.component.css',
})
export class RenewVehicleInfoComponent {
  vehicleName: string;
  registrationNo: string;
  registrationYear: number;
  vehiclePrice: number;

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    let policyId = localStorage.getItem('policyId');
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
