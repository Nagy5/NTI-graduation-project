import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddComponent } from './dashboard/add/add.component';
import { EditHomeComponent } from './dashboard/edit-home/edit-home.component';
import { EditAboutComponent } from './dashboard/edit-about/edit-about.component';
import { EditContactComponent } from './dashboard/edit-contact/edit-contact.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    ContactmeComponent,
    LoginComponent,
    DashboardComponent,
    MyServiceComponent,
    HeaderComponent,
    FooterComponent,
    AddComponent,
    EditHomeComponent,
    EditAboutComponent,
    EditContactComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
