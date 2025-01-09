import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment-13';
  constructor(private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const currentRoute = this.router.routerState.snapshot.root;
      let title = 'Angular'; // Default title

      // Check the current route's data and assign the appropriate title
      if (currentRoute.firstChild && currentRoute.firstChild.data['title']) {
        title = currentRoute.firstChild.data['title'];
      }

      this.titleService.setTitle(title); // Update the browser's title
    });
  }
}
