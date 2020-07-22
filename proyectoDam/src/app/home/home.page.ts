import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  array;

  constructor(public dispositivoServ: DispositivoService) {}

  ngOnInit(): void {
    this.array = this.dispositivoServ.getDispositivos();
    console.log(this.array);
  }
  
}
