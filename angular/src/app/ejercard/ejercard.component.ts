import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-ejercard',
  templateUrl: './ejercard.component.html',
  styleUrls: ['./ejercard.component.scss']
})
export class EjercardComponent {
  
  tiempo:number;
  
  constructor(public dialog: MatDialog) {
    this.tiempo = 10;
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'dialog-content-dialog',
  templateUrl: '../dialogeditar/dialogeditar.component.html',
})
export class DialogDataExampleDialog {
  
}
