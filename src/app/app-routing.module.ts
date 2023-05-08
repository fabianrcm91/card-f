import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloTarjetasComponent } from './modulo-tarjetas/modulo-tarjetas.component';
import { ModuloTransaccionesComponent } from './modulo-transacciones/modulo-transacciones.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'modulotarjetas', component:ModuloTarjetasComponent,

      },
      {
        path:'modulotransacciones', component:ModuloTransaccionesComponent,

      },
      {
        path:'**', redirectTo:'modulotarjetas',
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
