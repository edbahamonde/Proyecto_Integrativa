import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  nombre: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'nuevo'},
  {position: 2, nombre: 'nuevo2'}
];

@Component({
  selector: 'app-tablejercard',
  templateUrl: './tablejercard.component.html',
  styleUrls: ['./tablejercard.component.scss']
})

export class TablejercardComponent implements OnInit {
  title = 'angular';
  public cards:Array<any> = []

  displayedColumns: string[] = ['position'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    
    this.cards = [
      {
        nombre_ejercicio:'Nombre ejercicio',
        tiempo_ejercicio: 5
      },
      {
        nombre_ejercicio:'Nombre ejercicio2',
        tiempo_ejercicio: 2
      },
      {
        nombre_ejercicio:'Nombre ejercicio3',
        tiempo_ejercicio: 3
      }
    ]

  }
}