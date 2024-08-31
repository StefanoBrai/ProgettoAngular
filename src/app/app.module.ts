import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Two Way Binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ProvaComponent } from './components/prova/prova.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Prova2Component } from './components/prova2/prova2.component';
import { Prova3ServiceComponent } from './components/prova3-service/prova3-service.component';
import { Prova2CardComponent } from './components/prova2-card/prova2-card.component';
import { Prova4ParentComponent } from './components/prova4-parent/prova4-parent.component';
import { Prova4ChildComponent } from './components/prova4-child/prova4-child.component';
import { HomeComponent } from './components/home/home.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ContattoComponent } from './components/contatto/contatto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Prova5ObservableComponent } from './components/prova5-observable/prova5-observable.component';
import { ContattiTableComponent } from './components/contatti-table/contatti-table.component';
import { FormComponent } from './components/form/form.component';
// form
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
// chiamate http
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    Prova2Component,
    Prova3ServiceComponent,
    Prova2CardComponent,
    Prova4ParentComponent,
    Prova4ChildComponent,
    HomeComponent,
    ContattiComponent,
    ContattoComponent,
    NotFoundComponent,
    Prova5ObservableComponent,
    FormComponent,
    ContattiTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
