import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';

@Component({
  selector: 'app-prova4-parent',
  templateUrl: './prova4-parent.component.html',
  styleUrl: './prova4-parent.component.css'
})
export class Prova4ParentComponent implements OnInit {
  constructor(private service: ServizioProvaService) {}

  // parent -> child
  personeNelParent: any = []

  ngOnInit(): void {
    this.personeNelParent = this.service.getPersone()
  }

  // child -> parent
  nomeRicevutoDaChild: string = ""

  onRiceviDati(value: string) {
    this.nomeRicevutoDaChild = value
  }
}
