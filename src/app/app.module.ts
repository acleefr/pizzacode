import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormHomeComponent } from './components/form-home/form-home.component';
import { InfosComponent } from './components/infos/infos.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { HowItWOrksComponent } from './components/how-it-works/how-it-works.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    MenuComponent,
    HomeComponent,
    MenuCardComponent,
    SliderComponent,
    FormHomeComponent,
    InfosComponent,
    LoginComponent,
    FormLoginComponent,
    HowItWOrksComponent,
    AdminComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
