import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispositivoService } from '../services/dispositivo.service';
import { Dispositivo } from '../model/Dispositivo';
import { MedicionService } from '../services/medicion.service';
import { Medicion } from '../model/Medicion';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  id: number;
  public dispositivo = new Dispositivo(1, "a", "a", 1);
  public medicion = new Medicion(0,'a',0,0);

  constructor(private dispositivoServ: DispositivoService, private medicionServ: MedicionService, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    let idDipositivo = +this.route.snapshot.paramMap.get('id');
    this.dispositivoServ.getDispositivo(idDipositivo).then((disp) => {
      this.dispositivo = disp;
    });
    this.id = idDipositivo;
    console.log(idDipositivo);
    this.medicionServ.getMedicion(idDipositivo).then((medicion) => {
      this.medicion = medicion;
    });
  }

}
