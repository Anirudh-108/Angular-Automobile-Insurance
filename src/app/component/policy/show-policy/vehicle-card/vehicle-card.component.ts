import { Component } from '@angular/core';
import { PolicyService } from '../../../../service/policy.service';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css',
})
export class VehicleCardComponent {
  vehicle_name: string;
  registration_no: string;
  manufacturing_year: number;
  vehicle_type: string;

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    this.policyService.vehicleInfo$.subscribe((vehicle) => {
      this.vehicle_name = vehicle.manufacturerName + ' ' + vehicle.modelName;
      this.registration_no = vehicle.registrationNo;
      this.manufacturing_year = vehicle.yearOfPurchase;
      this.vehicle_type = vehicle.vehicleType;
    });
  }
}
