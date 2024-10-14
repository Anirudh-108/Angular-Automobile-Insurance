import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../../../service/customer.service';

@Component({
  selector: 'app-complain-form',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './complain-form.component.html',
  styleUrl: './complain-form.component.css',
})
export class ComplainFormComponent {
  complaintType: string='';
  complaintStatus: string='';
  description: string='';

  policyId: string;

  constructor(
    private customerService: CustomerService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  onClick(): void {
    let complaint = {
      complaintType: this.complaintType,
      complaintStatus: this.complaintStatus,
      description: this.description,
    };

    let token = localStorage.getItem('token');
    this.policyId = this.actRoute.snapshot.paramMap.get('id');

    this.customerService
      .addComplaint(complaint, token, this.policyId)
      .subscribe({
        next: (data) => {
          this.router.navigateByUrl('/all-complains');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
