import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { PersonalDetailsComponent } from '../../../policy/buy-policy-form/personal-details/personal-details.component';
import { VehicleDetailsComponent } from '../../../policy/buy-policy-form/vehicle-details/vehicle-details.component';
import { CheckoutComponent } from '../../../policy/buy-policy-form/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { AccidentDetailsComponent } from "../accident-details/accident-details.component";
import { ClaimVehicleDetailsComponent } from "../claim-vehicle-details/claim-vehicle-details.component";
import { ClaimCheckoutComponent } from "../claim-checkout/claim-checkout.component";

@Component({
  selector: 'app-claim-form',
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
    ToastModule, AccidentDetailsComponent, ClaimVehicleDetailsComponent, ClaimCheckoutComponent],
  templateUrl: './claim-form.component.html',
  styleUrl: './claim-form.component.css'
})
export class ClaimFormComponent {

}
