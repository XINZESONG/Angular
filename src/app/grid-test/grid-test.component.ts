import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-test.component.html',
  styleUrls: ['./grid-test.component.css'],
})
export class GridTestComponent {
  rows: number = 10;
  columns: number = 10;

  get gridArray() {
    return new Array(this.rows * this.columns);
  }
}
