import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { JuegoComponent } from './juego/juego.component';
import { DadoComponent } from './dado/dado.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    JuegoComponent,
    DadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
