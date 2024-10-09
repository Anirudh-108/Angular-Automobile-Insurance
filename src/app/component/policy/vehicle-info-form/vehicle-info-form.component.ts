import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PolicyService } from '../../../service/policy.service';

@Component({
  selector: 'app-vehicle-info-form',
  standalone: true,
  imports: [NavbarComponent, FormsModule, RouterLink],
  templateUrl: './vehicle-info-form.component.html',
  styleUrl: './vehicle-info-form.component.css',
})
export class VehicleInfoFormComponent {
  vehicleType: string = '';
  manufacturerName: string;
  modelName: string;
  variant: string;
  basePrice: number;
  fuelType: string;
  transmissionType: string;
  previousClaim: boolean;
  vehicleCondition: string;
  yearOfPurchase: number;
  zoneType: string;
  registrationNo: string;
  policyType: string;

  constructor(
    private policyService: PolicyService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vehicleType = this.actRoute.snapshot.paramMap.get('vehicle');
    this.policyService.vehicleInfo$.subscribe((vehicle) => {
      this.manufacturerName = vehicle.manufacturerName;
      this.modelName = vehicle.modelName;
      this.variant = vehicle.variant;
      this.basePrice = vehicle.basePrice;
      this.policyType = vehicle.policyType;
      this.transmissionType = vehicle.transmissionType;
      this.previousClaim = vehicle.previousClaim;
      this.vehicleCondition = vehicle.vehicleCondition;
      this.yearOfPurchase = vehicle.yearOfPurchase;
      this.zoneType = vehicle.zoneType;
      this.fuelType = vehicle.fuelType;
      this.registrationNo = vehicle.registrationNo;
    });
  }

  onClick() {
    let vehicleDetails = {
      vehicleType: this.vehicleType,
      manufacturerName: this.manufacturerName,
      modelName: this.modelName,
      variant: this.variant,
      basePrice: this.basePrice,
      fuelType: this.fuelType,
      transmissionType: this.transmissionType,
      previousClaim: this.previousClaim,
      vehicleCondition: this.vehicleCondition,
      yearOfPurchase: this.yearOfPurchase,
      zoneType: this.zoneType,
      registrationNo: this.registrationNo,
    };

    let policyType = this.policyType;

    console.log(vehicleDetails);

    this.policyService.showPolicy(vehicleDetails, policyType).subscribe({
      next: (data) => {
        this.router.navigateByUrl('/showPolicy');
      },
      error: (err) => {
        console.log(err.message);
      },
    });

    this.policyService.getPolicy(vehicleDetails, policyType).subscribe({
      next: (data) => {
        this.policyService.setPolicyInfo(
          data.id,
          data.policyType,
          data.coverageAmount,
          data.premiumAmount,
          data.termLength,
          data.policyStatus
        );
      },
      error: (err) => {
        console.log(err.message);
      },
    });

    this.policyService.setVehicleInfo(
      this.vehicleType,
      this.manufacturerName,
      this.modelName,
      this.variant,
      this.yearOfPurchase,
      this.basePrice,
      this.fuelType,
      this.transmissionType,
      this.vehicleCondition,
      this.zoneType,
      this.previousClaim,
      this.registrationNo,
      policyType
    );
  }
}
