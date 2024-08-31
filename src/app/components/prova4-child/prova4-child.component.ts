import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-prova4-child',
  templateUrl: './prova4-child.component.html',
  styleUrl: './prova4-child.component.css'
})
export class Prova4ChildComponent {
  // parent -> child
  @Input() data: any

  // child -> parent
  @Output() mandaDatiEvent = new EventEmitter<string>()

  datiDaPassareAlparent = "Ciao! Sono prova4-child"

  mandaDati() {
    this.mandaDatiEvent.emit(this.datiDaPassareAlparent)
  }
}
