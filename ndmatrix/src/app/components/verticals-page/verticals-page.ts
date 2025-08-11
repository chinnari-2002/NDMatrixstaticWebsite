import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'verticals-page',
  standalone:true,
  imports: [CommonModule,RouterLink],
  templateUrl: './verticals-page.html',
  styleUrls: ['./verticals-page.css']
})
export class VerticalsPage {
  constructor(){
   
  }
   hoverCard: any = null;
currentRoute: string = '';
  verticals=[
    {
      title:"Aerospace/Mechanical",
      description:`nDMatrix provides advanced tools and learning resources for  students, educators, and professionals aiming for industry readiness.`,
      verticalImg:"images/aerospace.jpg",
    },
//     {
//     title:"Robotics/Mechatronics",
//     description:`We offers hands-on learning tools and real-world project support in Robotics and Mechatronics,We empower students to design, simulate skills.`,
//  verticalImg:"images/robotic.jpg",
//     },
//      {
//     title:"AI/ML Software Tools",
//     description:`We provides AI/ML tools and learning modules tailored for practical implementation and academic growth.`,
//  verticalImg:"images/mlalogorithm.jpg",
//     },
     {
    title:"Software Development Center",
    description:` We supports students and educators in building real-world applications we offer guided, project-based learning experiences.`,
 verticalImg:"images/softwareDev.jpg",
    }
  ]

  onMouseEnter(card: any) {
  this.hoverCard = card;
}

onMouseLeave() {
  this.hoverCard = null;
}
//  // Check if this card's route matches current URL
//   isActive(card: any): boolean {
//     return card.route === this.currentRoute;
//   }
// onCardClick(card: any, event: MouseEvent) {
//     if (card.route) {
//       event.preventDefault(); 
//       this.router.navigate([card.route]);
//     }
//   }

}
