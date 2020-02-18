import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { CoursesComponent } from './sections/courses/courses.component';
import { ProgramsComponent } from './sections/programs/programs.component';
import { TeachersComponent } from './sections/teachers/teachers.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { MenuComponent } from './sections/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ProgramsComponent,
    TeachersComponent,
    ContactUsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
