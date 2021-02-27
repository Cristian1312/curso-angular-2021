import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HerosModule } from './heros/heros.module';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HerosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
