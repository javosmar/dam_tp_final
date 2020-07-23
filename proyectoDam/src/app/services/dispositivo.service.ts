import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  listado: Array<Dispositivo> = new Array<Dispositivo>();

  constructor() { 
    var disp1: Dispositivo = new Dispositivo(1,"Sensor 1","Patio",1);
    var disp2: Dispositivo = new Dispositivo(2,"Sensor 2","Cocina",2);
    var disp3: Dispositivo = new Dispositivo(3,"Sensor 3","Jardin Delantero",3);
    var disp4: Dispositivo = new Dispositivo(4,"Sensor 4","Living",4);
    this.listado.push(disp1);
    this.listado.push(disp2);
    this.listado.push(disp3);
    this.listado.push(disp4);
  }

  getListado(){
    return this.listado;
  }

  getDispositivo(id: number): Dispositivo {
    return this.listado.find(dispositivo => dispositivo.dispositivoId === id);
  }

}
