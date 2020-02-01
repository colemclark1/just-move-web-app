import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: TestComponent},
  { path: '**', component: TestComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
