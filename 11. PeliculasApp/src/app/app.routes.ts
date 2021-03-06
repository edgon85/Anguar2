import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const APP_ROUTERS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:text', component: SearchComponent },
    { path: 'pelicula/:id/:pag', component: PeliculaComponent },
    { path: '**', pathMatch:'full', redirectTo:'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS, { useHash:false });