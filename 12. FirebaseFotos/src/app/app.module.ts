import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

//servicios
import { CargaImagenesService } from './service/carga-imagenes.service'

// rutas
import { app_routing } from './app.routes'

// configuracion firebase
import { environment } from './config/firebase.config'
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//directivas
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { Http } from '@angular/http/src/http';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent,
    NgDropFilesDirective, 
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  providers: [
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
