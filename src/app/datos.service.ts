import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface  datosItem{
      no:string;

      nombre:string;
      sector:string;
      nombre_rector:string;
      tel_fono:string;
}
export type datosResponse=datosItem[];
@Injectable({
  providedIn: 'root'
})
export class DatosService {
  // url='https://www.datos.gov.co/resource/6he3-5m6n.json'
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get('https://www.datos.gov.co/resource/6he3-5m6n.json');
  }
}
