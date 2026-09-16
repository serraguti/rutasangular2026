import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { Homecomponent } from './components/homecomponent/homecomponent';
import { Musicacomponent } from './components/musicacomponent/musicacomponent';
import { Cinecomponent } from './components/cinecomponent/cinecomponent';
import { Notfoundcomponent } from './components/notfoundcomponent/notfoundcomponent';
import { routing, appRoutingProvider } from './app.routing';
import { Menucomponent } from './components/menucomponent/menucomponent';
import { NumeroDobleComponent } from './components/numero.doble.component/numero.doble.component';
import { Numerosroutedinamicos } from './components/numerosroutedinamicos/numerosroutedinamicos';

@NgModule({
  declarations: [
    App,
    Homecomponent,
    Musicacomponent,
    Cinecomponent,
    Notfoundcomponent,
    Menucomponent,
    NumeroDobleComponent,
    Numerosroutedinamicos,
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
  bootstrap: [App],
})
export class AppModule {}
