import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from "./third-page/third-page.component";
import { FourthSectionComponent } from "./fourth-section/fourth-section.component";
import { FifthSectionComponent } from "./fifth-section/fifth-section.component";
import { FooterSectionComponent } from "./footer-section/footer-section.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, SecondPageComponent, ThirdPageComponent, FourthSectionComponent, FifthSectionComponent, FooterSectionComponent,RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  constructor(private router: Router) {
    localStorage.clear();
  }

  login() {
    this.router.navigateByUrl('/login');
  }
}
