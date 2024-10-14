import { Component } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../service/customer.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css',
})
export class EditProfileComponent {
  name: string;
  email: string;
  contact: string;

  streetDetails: string;
  city: string;
  state: string;
  country: string;

  successMsg: string = undefined;
  errorMsg: string = undefined;

  constructor(
    private userService: UserService,
    private customerService: CustomerService,
    private router: Router
  ) {}

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

  onEdit() {
    let userDetails = {
      name: this.name,
      email: this.email,
      contact: this.contact,
      address: {
        streetDetails: this.streetDetails,
        city: this.city,
        state: this.state,
        country: this.country,
      },
    };

    let token = localStorage.getItem('token');

    this.customerService.updateCustomer(userDetails,token).subscribe({
      next: (data) => {
        console.log(data);
        this.successMsg = 'Profile Updated';
        this.router.navigateByUrl('/view-profile');
      },
      error: (err) => {
        console.log(err.message);
        this.errorMsg = 'Profile editing failed';
      },
    });
  }
}
