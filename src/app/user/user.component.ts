import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SourcesComponent } from '../sources/sources.component';
import { VolumeBarComponent } from '../volume-bar/volume-bar.component';
import { ScreenComponent } from '../screen/screen.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    HeaderComponent,
    SourcesComponent,
    VolumeBarComponent,
    ScreenComponent,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {}
