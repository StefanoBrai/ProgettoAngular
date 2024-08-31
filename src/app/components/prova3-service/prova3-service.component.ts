import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';

@Component({
  selector: 'app-prova3-service',
  templateUrl: './prova3-service.component.html',
  styleUrl: './prova3-service.component.css'
})
export class Prova3ServiceComponent implements OnInit {

  // iniezione del servizioProva
  constructor( private servizioProva: ServizioProvaService ) {}

  persone: any = []

  ngOnInit(): void {
    console.log("prova3", this.servizioProva.getPersone())
    this.persone = this.servizioProva.getPersone()
  }

  onClick() {
    this.persone = this.servizioProva.getPersoneAfterClick()
  }
}
