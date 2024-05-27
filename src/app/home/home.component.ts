import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToPage(pageName: string): void {
    console.log(pageName);
    this.router.navigate([`${pageName}`]);
  }
}
