import { PortfolioImageComponent } from './../portfolio-image/portfolio-image.component';
import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [PortfolioImageComponent, StarComponent, NgFor, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  images = [
    { src: '/port1.png', alt: 'cottage' },
    { src: '/port2.png', alt: 'chocolate pie' },
    { src: '/port3.png', alt: 'circuis tent' },
    { src: '/port1.png', alt: 'cottage' },
    { src: '/port2.png', alt: 'chocolate pie' },
    { src: '/port3.png', alt: 'circuis tent' }
  ];

  isModalOpen = false;
  selectedImage: string | null = null;

  openModal(imageSrc: string) {
    this.selectedImage = imageSrc;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedImage = null;
  }
}
