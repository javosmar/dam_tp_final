import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispositivoService } from '../services/dispositivo.service';
import { Dispositivo } from '../model/Dispositivo';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  id: number;
  public dispositivo = new Dispositivo(1,"a","a",1);

  constructor(private dispositivoServ: DispositivoService, private route:ActivatedRoute) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    let idDipositivo = +this.route.snapshot.paramMap.get('id');
    this.dispositivoServ.getDispositivo(idDipositivo).then((disp) => {
      this.dispositivo = disp;
    });
    this.id = this.dispositivo.dispositivoId;
  }

}
