import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material'

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
