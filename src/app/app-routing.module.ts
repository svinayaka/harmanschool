import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { CoursesComponent } from './sections/courses/courses.component';
import { ProgramsComponent } from './sections/programs/programs.component';
import { TeachersComponent } from './sections/teachers/teachers.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'contactus', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
