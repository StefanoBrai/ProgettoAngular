import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { FirebaseService, Persona } from '../../servizi/firebase.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent implements OnInit {

  constructor(private firebase: FirebaseService) {}
  
  // persona: any
  // isProfile: boolean = false
  persone: Persona[] = []

  // ngOnInit(): void {
  //   if (this.route.snapshot.paramMap.get('id')) {
  //     this.isProfile = true
  //     this.persona = this.service.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!))
  //   }
  //   else {
  //     this.isProfile = false
  //     this.persone = this.service.getPersone()
  //   }
  // }

  ngOnInit(): void {
    // this.persone = this.service.getPersone()

    this.firebase.getPersone()
    .subscribe( (data: any) => {
      this.persone = Object.keys(data).map((key) => {
        data[key]['id'] = key
        return data[key]
      })
    })

    // this.firebase.getPersone()
    // .subscribe(data => {

    //   this.persone = Object.keys(data).map((key) => {

    //         data[key]['id'] = key
    //         return data[key]
    //       })

    //   console.log("data: ", data)
    // });

  }
}
