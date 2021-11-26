import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PenisComponent } from './penis/penis.component';
import { HttpClientModule } from '@angular/common/http';
import { LevoJajeComponent } from './penis/levo-jaje/levo-jaje.component';
import { DesnoJajeComponent } from './penis/desno-jaje/desno-jaje.component';

@NgModule({
  declarations: [
    AppComponent,
    PenisComponent,
    LevoJajeComponent,
    DesnoJajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
