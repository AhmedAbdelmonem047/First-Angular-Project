import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollOffset: number = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollOffset == 0 ? false : true;
  }
}
