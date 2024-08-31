import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ContattoComponent } from './components/contatto/contatto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { authGuard, authGuardChild } from './auth/auth.guard';
import { Prova5ObservableComponent } from './components/prova5-observable/prova5-observable.component';
import { ContattiTableComponent } from './components/contatti-table/contatti-table.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: 'homepage', component: HomeComponent},
  { path: 'contatti', component: ContattiTableComponent, canActivate: [authGuard], canActivateChild: [authGuardChild], children: [
    { path: ':id', component: ContattoComponent }
  ] },
  // { path: 'obs', component: Prova5ObservableComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
