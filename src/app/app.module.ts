import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloTarjetasComponent } from './modulo-tarjetas/modulo-tarjetas.component';
import { ModuloTransaccionesComponent } from './modulo-transacciones/modulo-transacciones.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    AppComponent,
    ModuloTarjetasComponent,
    ModuloTransaccionesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
