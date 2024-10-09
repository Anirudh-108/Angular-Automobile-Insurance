import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-buy-policy-form',
  standalone: true,
  imports: [
    StepperModule,
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
    ToastModule,
  ],
  templateUrl: './buy-policy-form.component.html',
  styleUrl: './buy-policy-form.component.css',
})
export class BuyPolicyFormComponent {}
