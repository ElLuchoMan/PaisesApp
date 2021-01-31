import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = "";
  debouncer: Subject<string> = new Subject();
  termino: string = '';
  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }
  buscar() {
    this.onEnter.emit(this.termino);
  }
  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
