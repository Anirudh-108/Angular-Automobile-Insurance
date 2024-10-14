import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../../../service/policy.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vehicle-details.component.html',
  styleUrl: './vehicle-details.component.css',
})
export class VehicleDetailsComponent implements OnInit{
  vehicleName: string;
  registrationNo: string;
  registrationYear: number;
  vehiclePrice: number;

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    this.policyService.vehicleInfo$.subscribe((vehicle) => {
      this.vehicleName = vehicle.manufacturerName + ' ' + vehicle.modelName;
      this.registrationNo = vehicle.registrationNo;
      this.registrationYear = vehicle.yearOfPurchase;
      this.vehiclePrice = vehicle.basePrice;
    });
  }
}
