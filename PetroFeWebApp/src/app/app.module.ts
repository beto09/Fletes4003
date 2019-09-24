import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { HomeComponent } from './Componentes/home/home.component';
import { HeaderComponent } from './Componentes/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
