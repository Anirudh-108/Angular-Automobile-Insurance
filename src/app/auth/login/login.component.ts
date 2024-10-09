import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';
import { Router, RouterLink } from '@angular/router';
import { BuyPolicyFormComponent } from '../../component/policy/buy-policy-form/buy-policy-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  token: string = '';
  loginErrMsg: string = undefined;
  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  // for password hide/unhide functionality
  hide = true;
  toggleVisibility(): void {
    this.hide = !this.hide;
  }

  onLogin() {
    this.userService
      .getToken(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next: (data) => {
          this.token = data.token;
          console.log(this.token);
          this.userService.getUserDetails(this.token).subscribe({
            next: (data) => {
              this.user = data;
              console.log(this.user);
              // save username in local storage
              localStorage.setItem('token', this.token);
              localStorage.setItem('username', this.user.username);
              localStorage.setItem('role', this.user.role);

              if (localStorage.getItem('goToUrl') != undefined) {
                let url = localStorage.getItem('goToUrl');
                this.router.navigateByUrl(url);
              } else {
                switch (this.user.role) {
                  case 'ROLE_CUSTOMER':
                    this.router.navigateByUrl('/login-msg');
                    break;
                  case 'ROLE_DOCTOR':
                    this.router.navigateByUrl('/doctor/doctor-dashboard');
                    break;
                  case 'ROLE_EMPLOYEE':
                    this.router.navigateByUrl('/patient/patient-dashboard');
                    break;
                  default:
                    this.router.navigateByUrl('/page-not-found');
                    break;
                }
              }
            },
            error: (err) => {
              console.log(err);
            },
          });
        },
        error: (err) => {
          this.loginErrMsg = 'Invalid Credentials';
          console.log(err);
        },
      });
  }

  resetmsg() {
    this.loginErrMsg = undefined;
  }
}
