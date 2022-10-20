import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormHomeComponent } from './components/form-home/form-home.component';
import { InfosComponent } from './infos/infos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    MenuComponent,
    HomeComponent,
    SliderComponent,
    FormHomeComponent,
    InfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
