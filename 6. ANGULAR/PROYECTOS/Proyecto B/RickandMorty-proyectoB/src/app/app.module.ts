import { AboutModule } from './about/about.module';
import { SharedModule } from './components/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './services/services/character.service';
import { FormsModule } from '@angular/forms';
import { ListModule } from './list/list.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ListModule,
    SharedModule,
    AboutModule,
    /* Se utiliza para la conexión de nuestra API para que no pueda parecer nuestra llamada
    por eso tenemos que exportalo para poder pedirlo  >> los 2 modulos siguientes*/
    FormsModule,
    HttpClientModule
    
  ],

    /* Esto tenemos que crearlo para poder llamar a nuestro servicio */
  providers: [
    CharacterService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
