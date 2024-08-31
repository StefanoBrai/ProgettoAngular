import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, observable } from 'rxjs';

@Component({
  selector: 'app-prova5-observable',
  templateUrl: './prova5-observable.component.html',
  styleUrl: './prova5-observable.component.css'
})
export class Prova5ObservableComponent implements OnInit, OnDestroy {
  
  sottoscrizione: any

  ngOnInit(): void {
    // this.sottoscrizione = interval(1000).subscribe(numero => {
    //   console.log(numero)
    // })

    // creazione observable
    // new Observable(observe => {
    //   let count = 0
    //   setInterval(() => {
    //     observe.next(count)
    //     count++
    //   }, 1000);
    // }).subscribe((numero) => {
    //   console.log(numero)
    // })

  }

  // al cambio di component si fa unsubscibe
  ngOnDestroy(): void {
    this.sottoscrizione.unsubscribe()
  }
  
}
