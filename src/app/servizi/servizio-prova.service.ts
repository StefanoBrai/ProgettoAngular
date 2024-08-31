import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  constructor() { }

  private persone = [
    { nome: "luca", cognome: "verdi", isOnline: true, color: "blue" },
    { nome: "maria", cognome: "rossi", isOnline: false, color: "green" },
    { nome: "ciro", cognome: "bianchi", isOnline: false, color: "red" },
    { nome: "lisa", cognome: "bianchi", isOnline: true, color: "purple" },
    { nome: "giulia", cognome: "black", isOnline: true, color: "black" }
  ]

  private personeAfterClick = [
        { nome: "45345", cognome: "645tdh", isOnline: true, color: "blue" },
        { nome: "m423543aria", cognome: "g456dfgh", isOnline: false, color: "green" },
        { nome: "423658bfdbdf", cognome: "645dhdh", isOnline: false, color: "red" },
        { nome: "534ge35", cognome: "hghjtg57", isOnline: true, color: "purple" },
        { nome: "534534gr", cognome: "ghd654fgd", isOnline: true, color: "black" }
      ]

  private cani = [
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

  immagini = [
    { 
      immagine1: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      immagine2: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" 
    }
  ]

  getPersona(index: number) {
    return this.persone[index]
  }

  getPersone() {
    return this.persone
  }

  getPersoneAfterClick() {
    return this.personeAfterClick
  }

  getCani() {
    return this.cani
  }

  getImmagini() {
    return this.immagini
  }
}
