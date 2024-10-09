import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css',
})
export class SecondPageComponent {
  currentIndex: number = 0;
  offset: number = 0;
  cardWidth: number = 320; // 300px width + 20px margin
  cards = [
    {
      title: 'Comprehensive Coverage ☂️',
      description:
        'Protection against a wide range of risks including theft, vandalism, and natural disasters.',
    },
    {
      title: 'Personal Injury Protection ⛑️',
      description:
        'Covers medical expenses for you and your passengers after an accident, regardless of fault.',
    },
    {
      title: 'Liability Coverage 🛡️',
      description:
        'Protects you from financial loss if you are found responsible for causing an accident.',
    },
    {
      title: 'Roadside Assistance 📑',
      description:
        "Access to emergency services like towing, tire changes, and fuel delivery when you're stranded.",
    },
    {
      title: 'Discounts 📌',
      description:
        'Various discounts available for safe driving, multiple policies, and more.',
    },
    {
      title: 'Multiple Policy Discount ✨',
      description:
        'Provides a discount for bundling multiple insurance policies with the same company.',
    },
  ];

  moveSlides(direction: number) {
    const maxIndex = this.cards.length - 3; // Only 3 cards are visible at a time

    // Update the current index
    this.currentIndex += direction;

    // Ensure the index stays within bounds
    if (this.currentIndex < 0) {
      this.currentIndex = 0;
    } else if (this.currentIndex > maxIndex) {
      this.currentIndex = maxIndex;
    }

    // Calculate the new offset value
    this.offset = -this.currentIndex * this.cardWidth;
  }
}
