import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  name: string;
  email: string;
  username: string;
  password: string;
  contact: string;
  streetDetails: string;
  city: string;
  state: string;

  successMsg: string = undefined;
  errorMsg: string = undefined;

  constructor(private userService: UserService, private router: Router) {}

  // for password hide/unhide functionality
  hide = true;
  toggleVisibility(): void {
    this.hide = !this.hide;
  }

  onClick() {
    let userDetails = {
      name: this.name,
      email: this.email,
      contact: this.contact,
      user: {
        username: this.username,
        password: this.password,
      },
      address: {
        streetDetails: this.streetDetails,
        city: this.city,
        state: this.state,
        country: 'India',
      },
    };

    this.userService.addUserDetails(userDetails).subscribe({
      next: (data) => {
        console.log(data);
        this.successMsg = 'Account Created';
        this.router.navigateByUrl('/signup-msg');
      },
      error: (err) => {
        console.log(err.message);
        this.errorMsg = 'Account Created failed';
      },
    });
  }
}
