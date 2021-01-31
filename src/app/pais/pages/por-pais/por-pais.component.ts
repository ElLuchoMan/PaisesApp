import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError:boolean=false;
  paises:Pais[]=[];
  constructor(private paisService: PaisService) { }

  buscar() {
    this.hayError=false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe((paises)=>{
      console.log(paises);
      this.paises=paises;
      
    }, (err)=>{
     this.hayError=true;
     this.paises=[];
    }
    );

  }
}
