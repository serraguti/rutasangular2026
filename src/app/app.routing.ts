//NECESITAMOS CADA UNO DE LOS COMPONENTS EN LOS QUE VAYAMOS A NAVEGAR
import { Homecomponent } from "./components/homecomponent/homecomponent";
import { Musicacomponent } from "./components/musicacomponent/musicacomponent";
import { Cinecomponent } from "./components/cinecomponent/cinecomponent";
import { Notfoundcomponent } from "./components/notfoundcomponent/notfoundcomponent";

//NECESITAMOS UNA SERIE DE MODULOS DENTRO DE ANGULAR/ROUTER
import { Routes, RouterModule } from "@angular/router";
//EXPORTAR LAS RUTAS
import { ModuleWithProviders } from "@angular/core";
import { NumeroDobleComponent } from "./components/numero.doble.component/numero.doble.component";
import { Numerosroutedinamicos } from "./components/numerosroutedinamicos/numerosroutedinamicos";
//DECLARAMOS UN ARRA DE TIPO Routes PARA CADA RUTA, COMPUESTO POR 
//path, component en un elemento JSON.
const appRoutes: Routes = [
    { path: "", component: Homecomponent},
    { path: "cine", component: Cinecomponent}, 
    { path: "musica", component: Musicacomponent},
    { path: "numerodoble", component: NumeroDobleComponent},
    { path: "numerodoble/:numero", component: NumeroDobleComponent},
    { path: "numerosrouter", component: Numerosroutedinamicos},
    { path: "numerosrouter/:numero", component: Numerosroutedinamicos},
    { path: "**", component: Notfoundcomponent}
]
//DEBEMOS EXPORTAR LAS RUTAS HACIA NUESTRO MODULO PARA QUE LAS RECONOZCA
//NECESITAMOS UN PROVEEDOR DE RUTAS DENTRO DE MODULE
export const appRoutingProvider: any[]= [];
//EXPORTAMOS LAS PROPIAS RUTAS
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
