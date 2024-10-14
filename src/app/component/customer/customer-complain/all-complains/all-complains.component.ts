import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PolicyService } from '../../../../service/policy.service';

@Component({
  selector: 'app-all-complains',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './all-complains.component.html',
  styleUrl: './all-complains.component.css',
})
export class AllComplainsComponent {
  complaints: any[] = [];
  totalPages: number = 0;
  numArry: number[] = [];
  counter: number = 0;
  page: number = 0;
  size: number = 3;
  last: boolean = false;
  first: boolean = true;

  constructor(private policyService: PolicyService, private router: Router) {
    this.fetchData();
  }

  fetchData() {
    let token = localStorage.getItem('token');
    this.policyService.getAllComplaints(this.page, this.size, token).subscribe({
        next: (data) => {
          this.complaints = data.content;
          this.totalPages = data.totalPages;
          this.last = data.last;
          this.first = data.first;
  
          
          console.log(data);
          
  
          if (this.counter === 0) {
            let i = 0;
            while (i < this.totalPages) {
              this.numArry.push(i);
              i++;
            }
          }
          this.counter = this.counter + 1;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  onPageNumberClick(n: number) {
    this.page = n;
    this.fetchData();
  }

  onNext() {
    this.page = this.page + 1;
    this.fetchData();
  }

  onPrev() {
    this.page = this.page - 1;
    this.fetchData();
  }
}
