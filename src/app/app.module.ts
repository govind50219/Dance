import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstampieComponent } from './estampie/estampie.component';
import { JitterburgComponent } from './jitterburg/jitterburg.component';
import { NrityaganaComponent } from './nrityagana/nrityagana.component';
import { RootsComponent } from './roots/roots.component';
import { TourDeForceComponent } from './tour-de-force/tour-de-force.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EstampieComponent,
    JitterburgComponent,
    NrityaganaComponent,
    RootsComponent,
    TourDeForceComponent,
    ContactsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
