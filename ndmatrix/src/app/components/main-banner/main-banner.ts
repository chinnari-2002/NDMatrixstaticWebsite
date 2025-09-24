import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'main-banner',
  imports: [CommonModule],
  templateUrl: './main-banner.html',
  styleUrl: './main-banner.css'
})
export class MainBanner {
aboutCards=[
  {
    title:" Professional & Visionary",
    description:`We deliver next-generation products and services across multiple dimensions, leveraging advanced technologies and AI integration. Our strength lies in a culture enabling us to build smart solutions for a rapidly evolving world.`
  },
  {
    title:"Tech-Focused",
    description:`nDMatrix delivers AI-powered, technology-enabled products and solutions across various domains. Our highly skilled team combines deep technical expertise and an agile culture to craft impactful, scalable and Next-generation solutions that address real-world challenges.`
  },
  {
    title:" Creative & Forward Thinking",
    description:`At nDMatrix, we don't just build products, we create experiences powered by AI and advanced tech. Across various industries and dimensions, we combine creative thinking and intelligent design  into the future.`
  }
]

}
