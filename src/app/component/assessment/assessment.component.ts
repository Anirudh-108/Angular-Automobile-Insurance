import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../service/assessment.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [NgFor],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.css',
})
export class AssessmentComponent {
  totalPages: number = 0;
  numArry: number[] = [];
  counter: number = 0;
  page: number = 0;

  dataArray: any[] = [];

  constructor(private assessmentSrevice: AssessmentService) {}

  fetchData() {
    this.assessmentSrevice.getAllData(this.page).subscribe({
      next: (data) => {
        this.dataArray = data.data;
        this.totalPages=data.total_pages;
        this.page=data.page
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
    this.page = n+1;
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
