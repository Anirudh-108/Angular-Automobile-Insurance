import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customer-navbar.component.html',
  styleUrl: './customer-navbar.component.css',
})
export class CustomerNavbarComponent {
  username: any;
  constructor(private router: Router) {
    //injecting router service
    this.username = localStorage?.getItem('username');
  }
}
