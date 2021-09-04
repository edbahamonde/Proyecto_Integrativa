import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material.ts
import { MaterialModule } from './material';
import { LoginComponent } from './login/login.component';
import { TabComponent } from './tab/tab.component';
import { TolbaComponent } from './tolba/tolba.component';
import { RelojComponent } from './reloj/reloj.component';
import { EjercardComponent } from './ejercard/ejercard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabComponent,
    TolbaComponent,
    RelojComponent,
    EjercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [/*LoginComponent,*/ TabComponent, TolbaComponent]
})
export class AppModule { }
