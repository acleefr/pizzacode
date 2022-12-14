import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuCardComponent } from './components/home/menu-card/menu-card.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { FormHomeComponent } from './components/home/form-home/form-home.component';
import { InfosComponent } from './components/home/infos/infos.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { HowItWOrksComponent } from './components/home/how-it-works/how-it-works.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TeamComponent } from './components/about/team/team.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HistoryComponent } from './components/about/history/history.component';


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
    BoardAdminComponent,
    AdminComponent,
    TeamComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
