import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PolicyService } from '../../../service/policy.service';
import { VehicleService } from '../../../service/vehicle.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vehicle-info-form',
  standalone: true,
  imports: [NavbarComponent, FormsModule, RouterLink, NgFor],
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
  previousClaim: string;
  vehicleCondition: string;
  yearOfPurchase: number;
  zoneType: string;
  registrationNo: string;
  policyType: string;

  arrPolicyTypes: string[] = [];
  arrTransmissionTypes: string[] = [];
  arrVehicleConditionTypes: string[] = [];
  arrZoneTypes: string[] = [];
  arrFuelTypes: string[] = [];

  constructor(
    private policyService: PolicyService,
    private vehicleService: VehicleService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    vehicleService.getPolicyTypes().subscribe({
      next: (data) => {
        this.arrPolicyTypes = data;
      },
    });
    vehicleService.getTransmissionTypes().subscribe({
      next: (data) => {
        this.arrTransmissionTypes = data;
      },
    });
    vehicleService.getVehicleConditionTypes().subscribe({
      next: (data) => {
        this.arrVehicleConditionTypes = data;
      },
    });
    vehicleService.getZoneTypes().subscribe({
      next: (data) => {
        this.arrZoneTypes = data;
      },
    });
    vehicleService.getFuelTypes().subscribe({
      next: (data) => {
        this.arrFuelTypes = data;
      },
    });
  }

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
