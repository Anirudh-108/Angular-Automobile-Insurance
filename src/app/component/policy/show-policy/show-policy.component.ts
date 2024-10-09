import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { VehicleCardComponent } from "./vehicle-card/vehicle-card.component";
import { PolicyCardComponent } from "./policy-card/policy-card.component";

@Component({
  selector: 'app-show-policy',
  standalone: true,
  imports: [NavbarComponent, VehicleCardComponent, PolicyCardComponent],
  templateUrl: './show-policy.component.html',
  styleUrl: './show-policy.component.css'
})
export class ShowPolicyComponent {

}
