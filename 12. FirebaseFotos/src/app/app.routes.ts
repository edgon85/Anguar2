import { Routes, RouterModule } from "@angular/router";
import { FotosComponent } from "./components/fotos/fotos.component"
import { CargaComponent } from "./components/carga/carga.component"

const app_routes: Routes = [
    {path: 'fotos', component:FotosComponent},
    {path: 'carga', component: CargaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'fotos'}
];

export const app_routing = RouterModule.forRoot(app_routes);