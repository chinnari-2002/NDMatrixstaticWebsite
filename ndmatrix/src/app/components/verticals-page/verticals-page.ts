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
   constructor(private router: Router) {
    this.currentRoute = this.router.url; // ✅ set current route
  }
   hoverCard: any = null;
currentRoute: string = '';
  verticals=[
    {
      title:"Aerospace/Mechanical",
      description:`nDMatrix provides advanced tools and learning resources for  students, educators, and professionals aiming for industry readiness.`,
      verticalImg:"images/aerospace.jpg",
      route: "https://arc.ndmatrix.in",
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
  route: "https://sdc.ndmatrix.in", 
    }
  ]

  onMouseEnter(card: any) {
  this.hoverCard = card;
}

onMouseLeave() {
  this.hoverCard = null;
}
 // Check if this card's route matches current URL
  isActive(card: any): boolean {
    return card.route === this.currentRoute;
  }
onCardClick(card: any, event: MouseEvent) {
    event.preventDefault();

    if (!card.route) return;

    if (card.route.startsWith('http')) {
      // ✅ External URL
      window.open(card.route, '_blank');
    } else {
      // ✅ Internal Angular route
      this.router.navigate([card.route]);
    }
  }

}
