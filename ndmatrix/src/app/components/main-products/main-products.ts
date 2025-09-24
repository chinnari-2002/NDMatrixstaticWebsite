import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { MainHeader } from '../main-header/main-header';
import { MainFooter } from '../main-footer/main-footer';

@Component({
  selector: 'main-products',
  imports: [CommonModule,MainHeader,MainFooter],
  templateUrl: './main-products.html',
  styleUrl: './main-products.css'
})
export class MainProducts implements AfterViewInit {
   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  @ViewChild('productsContainer', { static: false }) productsContainer!: ElementRef;

  ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('products-visible');
        } else {
          entry.target.classList.remove('products-visible');
        }
      });
    }, { threshold: 0.1 });

    if (this.productsContainer?.nativeElement) {
      observer.observe(this.productsContainer.nativeElement);
    }
  }
}

productCards = [
  {
    title: "Test Generator",
    discription: `A backend tool for automated creation of customized tests by selecting question type, topic, difficulty and more.`,
    productsIcon: "fa-solid fa-file-circle-check"
  },
  {
    title: "Educational Management platform",
    discription: `A unified platform offering end-to-end solutions for learning, student administration and institutional management — built for educators, learners and administrators.`,
    productsIcon: "fa-solid fa-school"
  },
 
  {
    title: "Integrated Learning Platform",
    discription: `A unified platform combining OTS, ORVL, PQB, SM, LMS and SMS for seamless use by institutes and learners.`,
    productsIcon: "fa-solid fa-layer-group"
  },
  {
    title: "Cloud Services & Infrastructure",
    discription: `Tools for deploying, scaling and maintaining cloud apps with containers, CI/CD and monitoring.`,
    productsIcon: "fa-solid fa-cloud-arrow-up"
  }
];

}
