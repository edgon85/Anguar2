import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule , JsonpModule } from '@angular/http'

//servicios
import { PeliculasService } from './services/peliculas.service'

//rutas
import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

//pipes
import { PiliculaImagenPipe } from './pipes/pilicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    PeliculaComponent,
    PiliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
