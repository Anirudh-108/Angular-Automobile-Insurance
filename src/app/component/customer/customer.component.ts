import { Component } from '@angular/core';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { UserService } from '../../service/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CustomerNavbarComponent,RouterLink],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  name: string;
  username: string;

  constructor(private userService: UserService) {
    this.username = localStorage?.getItem('username');
    userService.getNameByUsername(this.username).subscribe({
      next: (data) => {
        this.name = data.msg;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
