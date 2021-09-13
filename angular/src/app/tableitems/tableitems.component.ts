import { Component } from '@angular/core';

@Component({
  selector: 'app-tableitems',
  templateUrl: './tableitems.component.html',
  styleUrls: ['./tableitems.component.scss']
})
export class TableitemsComponent {
  tiposdeEjercicios: string[] = ['Ejer1', 'Ejer2', 'Ejer3', 'Ejer4'];
}
