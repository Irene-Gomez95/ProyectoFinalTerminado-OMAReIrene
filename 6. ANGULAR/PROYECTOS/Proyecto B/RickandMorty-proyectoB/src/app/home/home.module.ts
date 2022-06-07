import { AppHomeBloque3Component } from './app-home-bloque3/app-home-bloque3.component';
import { AppHomeBloque2Component } from './app-home-bloque2/app-home-bloque2.component';
import { AppHomeBloque1Component } from './app-home-bloque1/app-home-bloque1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    AppHomeBloque1Component,
    AppHomeBloque2Component,
    AppHomeBloque3Component
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ]


})
export class HomeModule { }
