import { Component, input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { FirebaseService, Persona } from '../../servizi/firebase.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private firebase: FirebaseService, private service: ServizioProvaService) {}
  
  persona: any = null
  private routeSub: any
  id: string | null = ''

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.id = params.get('id')!
    //   this.persona = this.firebase.getPersona(this.id)
    //   .subscribe( (data: any) => {
    //     this.persona = Object.keys(data).map((key) => {
    //       data[key]['id'] = key
    //       return data[key]
    //     })
    //   })

    this.routeSub = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

      this.firebase.getPersona(this.id!).subscribe(
        data => {
          this.persona = data;
  
          //console.log(this.persona)
        })
    })
  }

  onDeletePersona() {
    this.firebase.deletePersona(this.id!)
      .subscribe()
  }

}
