import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PolicyService } from '../../../../service/policy.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-claims',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './all-claims.component.html',
  styleUrl: './all-claims.component.css',
})
export class AllClaimsComponent {
  claims: any[] = [];
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
    this.policyService.getAllClaims(this.page, this.size, token).subscribe({
      next: (data) => {
        this.claims = data.content;
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
