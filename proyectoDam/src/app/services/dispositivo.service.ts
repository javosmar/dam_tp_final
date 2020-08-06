import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/Dispositivo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private httpServ: HttpClient) {}

  private url = 'http://localhost:3000';

  getListado(): Promise<Dispositivo[]> {
    const url = this.url + '/api/dispositivo/todos';
    return this.httpServ.get(url).toPromise().then((objeto: Dispositivo) => {
      return objeto;
    }).catch((err) => {
      console.log('Error en la consulta');
      return null;
    });
  }

  getDispositivo(id): Promise<Dispositivo> {
    const url = this.url + '/api/dispositivo/' + id;
    return this.httpServ.get(url).toPromise().then((objeto: Dispositivo) => {
      return objeto;
    }).catch((err) => {
      console.log('Error en la consulta');
      return new Dispositivo(1, 'a', 'a', 1);
    });
  }

  insertarUno() {
    const url = this.url + '/api/dispositivo';
    this.httpServ.post(this.url, { nombre: "Martin", apellido: "Acosta" });
  }

}
