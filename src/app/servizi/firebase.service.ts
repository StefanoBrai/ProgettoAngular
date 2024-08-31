import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private url: string = ''
  private tabellaPersone: string = 'persone'

  constructor(private http: HttpClient) { }

  insertPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.url}/${this.tabellaPersone}.json`, persona)
  }

  getPersone(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.url}/${this.tabellaPersone}.json`)
  }

  getPersona(id: string): Observable<Persona> {
    return this.http.get<Persona>(`${this.url}/${this.tabellaPersone}/${id}.json`)
  }

  editPersona(id: string, body: {}) {
    return this.http.patch(`${this.url}/${this.tabellaPersone}/${id}.json`, body)
  }

  deletePersona(id: string) {
    return this.http.delete(`${this.url}/${this.tabellaPersone}/${id}.json`)
  }
}


export interface Persona {
  id?: string,
  nome: string,
  email: string
  isEditing?: boolean;
}