import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
    imports: [ BrowserAnimationsModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        MatSnackBarModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule],
    exports: [ BrowserAnimationsModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        MatSnackBarModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule]
})

export class MaterialModule { }