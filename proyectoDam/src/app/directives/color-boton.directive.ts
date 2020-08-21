import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorBoton]'
})
export class ColorBotonDirective {

  constructor(private el: ElementRef) { 
    console.log("hola");
    el.nativeElement.style.color = 'yellow';
  }

}
