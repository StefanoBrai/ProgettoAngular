import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-prova2',
  templateUrl: './prova2.component.html',
  styleUrl: './prova2.component.css'
})
export class Prova2Component implements AfterViewInit {

  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>

  ngAfterViewInit(): void {
    console.log("AfterViewInit")
    console.log(this.inputSaluti)
  }

  onClick() {
    console.log(this.inputSaluti.nativeElement.value)
  }
}
