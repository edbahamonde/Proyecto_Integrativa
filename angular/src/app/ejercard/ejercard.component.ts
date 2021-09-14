import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-ejercard',
  templateUrl: './ejercard.component.html',
  styleUrls: ['./ejercard.component.scss']
})
export class EjercardComponent implements OnInit{
  
  @Input() datosEntrantes:any;
  
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

  ngOnInit():void{

  }
}

@Component({
  selector: 'dialog-content-dialog',
  templateUrl: '../dialogeditar/dialogeditar.component.html',
})
export class DialogDataExampleDialog {
  
}
