import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  array;

  constructor(public dispositivoServ:DispositivoService) { 
    
  }

  ngOnInit(): void {
    this.array = this.dispositivoServ.getDispositivos();
    console.log(this.array);
  }

}
