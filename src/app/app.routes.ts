import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    // {path:'', component:AppComponent},
    {path:'', component:HomeComponent},
    {path:'User', component:UserComponent}
];
