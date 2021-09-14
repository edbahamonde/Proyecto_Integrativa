import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
}

export interface PeriodicElement2 {
  name2: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1},
  {position: 2},
  {position: 3}
];

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})

export class BuscarComponent{

  value='';

  displayedColumns: string[] = ['position'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
