import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { JobComponent } from './job/job.component';
import { ClientComponent } from './client/client.component';
import { EmployerComponent } from './employer/employer.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'aboutus',
        component: AboutusComponent,
      },
      {
        path: 'job',
        component: JobComponent,
      },
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path: 'employer',
        component: EmployerComponent,
      },
      {
        path: 'contactus',
        component: ContactusComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [
    SignupComponent
  ]
})
export class AppRoutingModule { }
