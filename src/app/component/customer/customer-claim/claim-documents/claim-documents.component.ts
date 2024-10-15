import { Component } from '@angular/core';
import { CustomerService } from '../../../../service/customer.service';
import { PolicyService } from '../../../../service/policy.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-claim-documents',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './claim-documents.component.html',
  styleUrl: './claim-documents.component.css',
})
export class ClaimDocumentsComponent {
  show: boolean = false;
  file: File = null;

  firMsg: string = '';

  constructor(
    private customerService: CustomerService,
    private policyService: PolicyService
  ) {}

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUploadFir() {
    let formData = new FormData();
    let token = localStorage.getItem('token');
    let claimPolicyId = localStorage.getItem('claimPolicyId');
    formData.set('file', this.file);
    this.customerService.uploadFIR(claimPolicyId, formData, token).subscribe({
      next: (data) => {
        this.firMsg = 'FIR copy uploaded successfully';
        this.file = null;
      },
    });
  }
}
