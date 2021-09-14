import { Component } from '@angular/core';

@Component({
  selector: 'app-tableitems',
  templateUrl: './tableitems.component.html',
  styleUrls: ['./tableitems.component.scss']
})
export class TableitemsComponent {
  tiposdeEjercicios: string[] = ['Cinta de Andar', 'Bicicleta Elíptica', 'Saltos Estrella', 'Flexión de codo'];
}
