import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';

  height = 700;
  width = 1000;
  position_X = 100/this.width*100;
  position_Y = 35/this.height*100;

  calculateStyles() {
    return {'position':'absolute', 'right':this.position_X+'%','top':this.position_Y+'%'}
  }
}
