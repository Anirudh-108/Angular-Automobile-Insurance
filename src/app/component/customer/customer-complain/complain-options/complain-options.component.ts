import { Component } from '@angular/core';
import { CustomerNavbarComponent } from "../../customer-navbar/customer-navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-complain-options',
  standalone: true,
  imports: [CustomerNavbarComponent,RouterLink],
  templateUrl: './complain-options.component.html',
  styleUrl: './complain-options.component.css'
})
export class ComplainOptionsComponent {
onClick(a:any){

}
}
