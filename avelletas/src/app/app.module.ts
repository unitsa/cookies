import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { NosotrosComponent } from './util/nosotros/nosotros.component';
import { ContactanosComponent } from './util/contactanos/contactanos.component';
import { HomeComponent } from './commons/home/home.component';
import { CarruselComponent } from './util/carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NosotrosComponent,
    ContactanosComponent,
    HomeComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
