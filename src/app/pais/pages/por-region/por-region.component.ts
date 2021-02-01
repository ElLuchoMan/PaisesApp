import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`button{ margin-right:5px}`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  hayError: boolean = false;
   paises: Pais[]=[];


  constructor(private regionService: PaisService) { }
  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-outline-primary' : 'btn btn-primary';
  }
  activarRegion(region: string) {
    if(region=== this.regionActiva){return}
    this.regionActiva = region;
    this.paises=[];
    this.regionService.buscarRegion(region)
    .subscribe(paises => this.paises = paises);
  }

}
