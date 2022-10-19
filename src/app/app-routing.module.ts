import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FooterComponent } from './footer/footer.component'


const routes: Routes = [
  { path: 'home', component: FooterComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
