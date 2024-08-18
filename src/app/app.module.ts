import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from "./services/services.component";
import { ProjetsComponent } from './projets/projets.component';
import { MeContacterComponent } from './me-contacter/me-contacter.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesComponent,
    ProjetsComponent,
    MeContacterComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
