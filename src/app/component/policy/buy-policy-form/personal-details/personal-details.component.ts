import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../../service/customer.service';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css',
})
export class PersonalDetailsComponent implements OnInit {
  name: string;
  email: string;
  contactNo: string;

  constructor(private customerSevice: CustomerService) {}

  ngOnInit(): void {
    let username = localStorage.getItem('username');
    this.customerSevice.getCustomer(username).subscribe({
      next: (data) => {
        this.customerSevice.setCustomerInfo(
          data.name,
          data.email,
          data.contact
        );
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.customerSevice.customerInfo$.subscribe((customer) => {
      this.name = customer.name;
      this.email = customer.email;
      this.contactNo = customer.contact;
    });
  }
}
