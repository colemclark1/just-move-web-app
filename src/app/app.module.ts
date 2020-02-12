import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { NewWorkoutComponent } from './new-workout/new-workout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewWorkoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
