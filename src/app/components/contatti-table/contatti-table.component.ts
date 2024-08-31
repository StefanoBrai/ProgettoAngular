import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService, Persona } from '../../servizi/firebase.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contatti-table',
  templateUrl: './contatti-table.component.html',
  styleUrl: './contatti-table.component.css'
})
export class ContattiTableComponent implements OnInit {

  persone: Persona[] = []

  displayedColumns: string[] = ['id', 'nome', 'email', 'actions'];
  dataSource: MatTableDataSource<Persona> = new MatTableDataSource<Persona>([]);

  // Quando una riga viene editata, le altre non possono esserlo
  isEditingAnyRow: boolean = false;

  constructor(private firebase: FirebaseService) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getData()
  }

  //#region Get Persone
  getData(): void {
    this.firebase.getPersone()
      .subscribe( (data: any) => {
        const personeArray: Persona[] =  Object.keys(data).map(key => ({
          ...data[key],
          id: key,
          isEditing: false
        }))

        this.dataSource.data = personeArray;

        console.log('DataSource:', this.dataSource); 
      } )
  }
  //#endregion

  //#region Edit Persona
  startEditing(element: Persona): void {
    element.isEditing = true;
    this.isEditingAnyRow = true;
  }

  cancelEditing(element: Persona): void {
    element.isEditing = false;
    this.isEditingAnyRow = false;
  }

  saveChanges(element: Persona): void {
    this.firebase.editPersona(element.id!, element)
      .subscribe(
        () => {
          element.isEditing = false;
          this.isEditingAnyRow = false;
        },
        error => {
          console.error('Error updating persona:', error);
        }
      );
  }
  //#endregion

  //#region Delete Persona
  deletePersona(id: string) {
    this.firebase.deletePersona(id)
      .subscribe(
        () => {
          this.getData()
        }
      );
  }
  //#endregion

}
