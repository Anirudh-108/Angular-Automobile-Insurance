import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { RouterLink } from '@angular/router';
import { PolicyService } from '../../../service/policy.service';

@Component({
  selector: 'app-customer-documents',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './customer-documents.component.html',
  styleUrl: './customer-documents.component.css',
})
export class CustomerDocumentsComponent implements OnInit {
  show: boolean = false;
  file: File = null;

  aadharMsg: string = '';
  vehicleMsg: string = '';

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

  constructor(
    private customerService: CustomerService,
    private policyService: PolicyService
  ) {}

  ngOnInit(): void {
    this.policyService.vehicleInfo$.subscribe((vehicle) => {
      this.modelName = vehicle.modelName;
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
    });

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
    this.customerService.addVehicle(vehicleDetails, token).subscribe({
      next: (data) => {
        console.log('vehicle added');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUploadAadhar() {
    let formData = new FormData();
    let token = localStorage.getItem('token');
    formData.set('file', this.file);
    this.customerService.uploadAadhar(formData, token).subscribe({
      next: (data) => {
        this.aadharMsg = 'Aadhar card uploaded successfully';
        this.file = null;
      },
    });
  }

  onUploadVehicleRc() {
    let formData = new FormData();
    let token = localStorage.getItem('token');
    let registrationNo = this.registrationNo;
    formData.set('file', this.file);
    this.customerService.uploadVehicleRc(registrationNo, formData, token).subscribe({
      next: (data) => {
        this.vehicleMsg = 'Vehicle RC uploaded successfully';
        this.file = null;
      },
    });
  }
}
