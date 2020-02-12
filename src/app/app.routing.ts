import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NewWorkoutComponent} from './new-workout/new-workout.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'new-workout', component: NewWorkoutComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
