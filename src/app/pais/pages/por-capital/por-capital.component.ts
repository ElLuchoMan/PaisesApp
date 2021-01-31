import { Component, Output, EventEmitter } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];
  constructor(private ciudadService: PaisService) { }
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.ciudadService.buscarCiudad(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }


}
