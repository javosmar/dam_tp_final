import { Injectable } from '@angular/core';
import { Dispositivo } from '../Dispositivo';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  public array = [
    new Dispositivo(1,"Sensor 1","Patio",1),
    new Dispositivo(2,"Sensor 2","Cocina",2),
    new Dispositivo(3,"Sensor 3","Jardin Delantero",3),
    new Dispositivo(4,"Sensor 4","Living",4),
    new Dispositivo(5,"Sensor 5","Living",5),
  ];

  constructor() { }

  getDispositivos(){
    return this.array;
  }

}