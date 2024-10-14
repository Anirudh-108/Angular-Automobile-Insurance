import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.css',
})
export class CustomerProfileComponent implements OnInit {
  name: string;
  email: string;
  contact: string;
  streetDetails: string;
  city: string;
  state: string;
  country: string;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    let username = localStorage.getItem('username');
    this.customerService.getCustomer(username).subscribe({
      next: (data) => {
        this.name = data.name;
        this.email = data.email;
        this.contact = data.contact;
        this.streetDetails = data.address.streetDetails;
        this.city = data.address.city;
        this.state = data.address.state;
        this.country = data.address.country;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
