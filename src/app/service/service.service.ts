import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TarjetaConsultada } from '../interfaces/tarjeta-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }

  public consultarTarjeta(pan:number):Observable<TarjetaConsultada>{
    let httpParams=
    {
      'pan':pan
    };
    return this.http.get<TarjetaConsultada>(`http://localhost:8080/api/v1/consultartarjeta`,
    {
    params:httpParams
    });
  }
}
