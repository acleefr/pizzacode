import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
import { MenuCardComponent } from './menu-card/menu-card.component';
=======
import { SliderComponent } from './components/slider/slider.component';
import { FormHomeComponent } from './components/form-home/form-home.component';
import { InfosComponent } from './components/infos/infos.component';
>>>>>>> 1549dff14f1061282deb27479e8fb35e6d4ebe98

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    MenuComponent,
    HomeComponent,
<<<<<<< HEAD
    MenuCardComponent
=======
    SliderComponent,
    FormHomeComponent,
    InfosComponent
>>>>>>> 1549dff14f1061282deb27479e8fb35e6d4ebe98
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
