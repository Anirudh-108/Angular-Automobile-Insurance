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

  modelName: string = '';

  constructor(
    private customerService: CustomerService,
    private policyService: PolicyService
  ) {}

  ngOnInit(): void {
    this.policyService.vehicleInfo$.subscribe((vehicle) => {
      this.modelName = vehicle.modelName;
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
    let model=this.modelName
    formData.set('file', this.file);
    this.customerService
      .uploadVehicleRc(model,formData, token)
      .subscribe({
        next: (data) => {
          this.vehicleMsg = 'Vehicle RC uploaded successfully';
          this.file = null;
        },
      });
  }
}
