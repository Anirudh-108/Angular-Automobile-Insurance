import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-documents',
  standalone: true,
  imports: [NgIf, NgFor,RouterLink],
  templateUrl: './customer-documents.component.html',
  styleUrl: './customer-documents.component.css',
})
export class CustomerDocumentsComponent {
  title: string = '';
  price: string = '';
  show: boolean = false;
  file: File = null;
  imageMsg: string = '';
  images: string[] = [];
  constructor(private customerService: CustomerService) {}

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    let formData = new FormData();
    formData.set('file', this.file);
    this.customerService.uploadImage(formData, 1).subscribe({
      next: (data) => {
        this.images.push(this.file.name);
        this.imageMsg = 'Image ' + this.file.name + ' is uploaded';
        this.file = null;
      },
    });
  }
}
