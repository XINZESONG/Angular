import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css',
})
export class ScreenComponent {
  private selectedTab = 'Controls';
  currentClasses: string = '';

  selectTab(value: string) {
    this.selectedTab = value;
  }
  showContent(value: string) {
    return this.selectTab !== undefined && value == this.selectedTab;
  }
 
}
