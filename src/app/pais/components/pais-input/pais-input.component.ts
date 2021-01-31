import { Component, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
 })
export class PaisInputComponent{
termino:string='';
@Output () onEnter:EventEmitter<string> = new EventEmitter();
buscar(){
  this.onEnter.emit(this.termino);
}

}
