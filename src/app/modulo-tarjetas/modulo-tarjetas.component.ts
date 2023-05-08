import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrearTarjeta, DatosTarjeta, TarjetaConsultada } from '../interfaces/tarjeta-interfaces';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-modulo-tarjetas',
  templateUrl: './modulo-tarjetas.component.html',
  styleUrls: ['./modulo-tarjetas.component.scss']
})
export class ModuloTarjetasComponent {
  tarjetaConsultada!:TarjetaConsultada;
  datoRetornar!:DatosTarjeta;
  form:FormGroup;
  formCrear:FormGroup;
  pan!:string;
  titular!: string
  cedula!: number
  telefono!: number
  estado!: string
  codResponse!:string
  message!:string
  numeroValidacion!:number


  constructor(private formBuilder:FormBuilder, private service:ServiceService ){

  this.form=this.formBuilder.group(
    {
      numeroTarjeta:['',[Validators.required]],
    }
  );

  this.formCrear=this.formBuilder.group(
    {
      numeroTarjeta:['',[Validators.required]],
      titularTarjeta:['',[Validators.required]],
      tipoTarjeta:['',[Validators.required]],
      cedulaTitular:['',[Validators.required]],
      telefonoTitular:['',[Validators.required]]
    }
  )
  }

  crearTarjeta(){
    const tarjeta={
      numeroTarjeta:this.formCrear.get("numeroTarjeta")?.value,
      tipoTarjeta:this.formCrear.get("numeroTarjeta")?.value,
      titular:this.formCrear.get("titularTarjeta")?.value,
      cedula:this.formCrear.get("cedulaTitular")?.value,
      telefono:this.formCrear.get("telefonoTitular")?.value

    }
    this.service.crearTarjeta(<any>tarjeta).subscribe({
      next:(respuesta:DatosTarjeta)=>{
      this.datoRetornar=respuesta
      this.pan = this.datoRetornar.pan;
      this.codResponse=this.datoRetornar.codRespuesta;
      this.message=this.datoRetornar.message;
      this.numeroValidacion=this.datoRetornar.numeroValidacion;
            }
    })

  }

  consultarTarjeta(){
    const numeroTarjeta={
      tarjeta:this.form.get("numeroTarjeta")?.value
    }
    this.service.consultarTarjeta(numeroTarjeta.tarjeta).subscribe({
      next:(respuesta:TarjetaConsultada)=>{
      this.tarjetaConsultada=respuesta
      this.pan = this.tarjetaConsultada.pan;
      this.titular=this.tarjetaConsultada.titular;
      this.cedula=this.tarjetaConsultada.cedula;
      this.telefono=this.tarjetaConsultada.telefono;
      this.estado=this.tarjetaConsultada.estado;
    }


    }
    );
  }


}
