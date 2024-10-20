import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { EditHomeComponent } from './dashboard/edit-home/edit-home.component';
import { EditAboutComponent } from './dashboard/edit-about/edit-about.component';
import { EditContactComponent } from './dashboard/edit-contact/edit-contact.component';
import { AddComponent } from './dashboard/add/add.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: MyServiceComponent },
  { path: 'about', component: AboutmeComponent },
  { path: 'contact us', component: ContactmeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'edit-home', component: EditHomeComponent },
      { path: 'edit-about', component: EditAboutComponent },
      { path: 'edit-contact-me', component: EditContactComponent },
      { path: 'add-service', component: AddComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
