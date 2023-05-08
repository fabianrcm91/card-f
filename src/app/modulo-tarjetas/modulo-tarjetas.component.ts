import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaConsultada } from '../interfaces/tarjeta-interfaces';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-modulo-tarjetas',
  templateUrl: './modulo-tarjetas.component.html',
  styleUrls: ['./modulo-tarjetas.component.scss']
})
export class ModuloTarjetasComponent {
  tarjetaConsultada!:TarjetaConsultada;
  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private service:ServiceService ){

  this.form=this.formBuilder.group(
    {
      numeroTarjeta:['',[Validators.required]],
    }
  )
  }

  consultarTarjeta(){
    const numeroTarjeta={
      tarjeta:this.form.get("numeroTarjeta")?.value
    }
    this.service.consultarTarjeta(numeroTarjeta.tarjeta).subscribe({
      next:(respuesta:TarjetaConsultada)=>{
      this.tarjetaConsultada=respuesta}
    }
    );
  }


}
