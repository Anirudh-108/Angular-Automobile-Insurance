import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PolicyService } from '../../../service/policy.service';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-my-policies',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, ChartModule],
  templateUrl: './my-policies.component.html',
  styleUrl: './my-policies.component.css',
})
export class MyPoliciesComponent {
  activePolicies: any[] = [];
  expiredPolicies: any[] = [];

  /* for chart.js  */
  aptData: any;
  barOptions: any;
  specializationData: any;
  pieOptions: any;

  constructor(private policyService: PolicyService, private router: Router) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.aptData = {
      labels: ['Active', 'Expired', 'Claims'],
      datasets: [
        {
          label: 'Policies',
          data: [15, 20, 10, 12, 18, 8],
          backgroundColor: [
            '#5DADE2',
            '#58D68D',
            '#F7DC6F',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
          ],
          borderWidth: 0.5,
        },
      ],
    };

    this.barOptions = {
      responsive: false,
      maintainAspectRatio: true,

      plugins: {
        legend: {
          labels: {
            display:false,
            color: textColor,
          },
        },
      },

      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        maintainAspectRatio: false,
      },
    };

    //------------------------------Pie Chart---------------------------------
    this.specializationData = {
      labels: ['Active Policies', 'Expired Policies', 'Claims Filed'],
      datasets: [
        {
          data: [4, 3, 2],
          backgroundColor: ['#7E60BF', '#E4B1F0', '#433878'],
          borderColor: ['#F5F5F7', '#F5F5F7', '#F5F5F7'],
        },
      ],
    };
    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }

  ngOnInit() {
    let token = localStorage.getItem('token');

    this.policyService.getAllActivePolicies(token).subscribe({
      next: (data) => {
        this.activePolicies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.policyService.getAllExpiredPolicies(token).subscribe({
      next: (data) => {
        this.expiredPolicies = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onClick(vehicle: string) {
    this.router.navigate(['/info', vehicle]);
  }

  onView(id: number) {
    this.router.navigateByUrl('/view-policy/' + id);
  }
}
