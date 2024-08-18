import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from "./services/services.component";
import { ProjetsComponent } from './projets/projets.component';
import { MeContacterComponent } from './me-contacter/me-contacter.component';

@NgModule({
  declarations: [
    AppComponent,
    MeContacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServicesComponent,
    ProjetsComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
