import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoidsComponent } from './boids/boids.component';
import { AssignmentsComponent } from './assignments/assignments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoidsComponent,
    AssignmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
