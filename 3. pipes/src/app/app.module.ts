import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core'
import { CapitalizadoPipe } from './pipes/capitalizado.pipe'

import { AppComponent } from './app.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContraseniaPipe } from './pipes/contrasenia.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContraseniaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
