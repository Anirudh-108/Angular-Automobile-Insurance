import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { PersonalDetailsComponent } from '../../../policy/buy-policy-form/personal-details/personal-details.component';
import { VehicleDetailsComponent } from '../../../policy/buy-policy-form/vehicle-details/vehicle-details.component';
import { CheckoutComponent } from '../../../policy/buy-policy-form/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RenewVehicleInfoComponent } from "./renew-vehicle-info/renew-vehicle-info.component";
import { RenewCheckoutComponent } from "./renew-checkout/renew-checkout.component";

@Component({
  selector: 'app-renew-policy-form',
  standalone: true,
  imports: [StepperModule,
    ButtonModule,
    PersonalDetailsComponent,
    VehicleDetailsComponent,
    CheckoutComponent,
    FormsModule,
    StepsModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    DividerModule,
    InputTextareaModule,
    ToastModule, RenewVehicleInfoComponent, RenewCheckoutComponent],
  templateUrl: './renew-policy-form.component.html',
  styleUrl: './renew-policy-form.component.css'
})
export class RenewPolicyFormComponent {

}
