import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit, OnChanges {

  cani = [
    {
      nome: "roger",
      razza: "golden",
      descrizione: "questa è una descrizione accurata"
    },
    {
      nome: "luka",
      razza: "boh",
      descrizione: "questa è una descrizione accurata di boh"
    }
  ]

  isDisabled = true

  immagine1 = "https://material.angular.io/assets/img/examples/shiba2.jpg"
  immagine2 = "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"

  title = 'ProgettoAngular';

  onInput(event: Event){
    this.title = (<HTMLInputElement>event?.target).value
  }

  onClick(event: Event){
    this.title = "Ho Cliccato"
  }

  isVisible = true

  persone = [
    { nome: "luca", cognome: "verdi", isOnline: true },
    { nome: "maria", cognome: "rossi", isOnline: false },
    { nome: "ciro", cognome: "bianchi", isOnline: false },
    { nome: "lisa", cognome: "bianchi", isOnline: true },
    { nome: "giulia", cognome: "black", isOnline: true }
  ]

  // [ngSwitch]
  numero = 3
  stringa = "topolino"

  // importare i dati dal parent, in questo caso app.component
  @Input() data: any

  ngOnInit(): void {
    console.log(this.data)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
