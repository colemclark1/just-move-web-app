import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule} from '@angular/material'

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule
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
