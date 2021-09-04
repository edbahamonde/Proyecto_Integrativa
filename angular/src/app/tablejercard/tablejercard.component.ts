import { Component } from '@angular/core';

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
export class TablejercardComponent{
  displayedColumns: string[] = ['position'];
  dataSource = ELEMENT_DATA;
}
