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
        nombre_ejercicio:'Elevación de piernas',
        tiempo_ejercicio: 5,
        video: "https://thumbs.gfycat.com/BogusRawBalloonfish-max-1mb.gif"
      },
      {
        nombre_ejercicio:'Ejercicios de gluteos',
        tiempo_ejercicio: 2,
        video: "https://thumbs.gfycat.com/SparseThatDanishswedishfarmdog-max-1mb.gif"
      },
      {
        nombre_ejercicio:'Morilla',
        tiempo_ejercicio: 3,
        video: "https://thumbs.gfycat.com/EvenHideousGuillemot-max-1mb.gif"
      }
    ]

  }
}