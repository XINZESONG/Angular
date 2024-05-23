import { Component} from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,UserComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular';

  height = 700;
  width = 1000;
  position_X = 100/this.width*100;
  position_Y = 35/this.height*100;

  constructor(private router:Router){}

  calculateStyles() {
    return {'position':'absolute', 'right':this.position_X+'%','top':this.position_Y+'%'}
  }

  goToPage(pageName:string):void{
    console.log(pageName)
    this.router.navigate([`${pageName}`])
  }
}
