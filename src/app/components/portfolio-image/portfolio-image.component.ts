import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-image',
  imports: [],
  templateUrl: './portfolio-image.component.html',
  styleUrl: './portfolio-image.component.css'
})
export class PortfolioImageComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
