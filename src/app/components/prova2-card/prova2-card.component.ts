import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';

@Component({
  selector: 'app-prova2-card',
  templateUrl: './prova2-card.component.html',
  styleUrl: './prova2-card.component.css'
})
export class Prova2CardComponent implements OnInit {
  constructor(private servizioProva: ServizioProvaService ) {}

  cani: any = []
  immagini: any = []

  ngOnInit(): void {
    this.cani = this.servizioProva.getCani()
    this.immagini = this.servizioProva.getImmagini()
  }

}
