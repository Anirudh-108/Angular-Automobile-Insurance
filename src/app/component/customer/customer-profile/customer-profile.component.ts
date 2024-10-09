import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-profile',
  standalone: true,
  imports: [],
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.css',
})
export class CustomerProfileComponent {
  name: string;
  email: string;
  contact: string;
  streetDetails: string;
  city: string;
  state: string;
  country: string;

  editProfile() {}
}
