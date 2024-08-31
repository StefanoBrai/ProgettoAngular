import { Component, OnInit, viewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FirebaseService } from '../../servizi/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  constructor(private firebase: FirebaseService, private router: Router) {}

  formPersona!: FormGroup

  ngOnInit(): void {
    this.formPersona = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl()
    })
  }

  onSubmit() {
    this.firebase.insertPersona( 
      { nome: this.formPersona.value.nome, email: this.formPersona.value.email }
    ).subscribe(() => {
      this.router.navigate(['/contatti']);
    })
  }

}
