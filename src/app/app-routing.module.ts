import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstampieComponent } from './estampie/estampie.component';
import { JitterburgComponent } from './jitterburg/jitterburg.component';
import { NrityaganaComponent } from './nrityagana/nrityagana.component';
import { RootsComponent } from './roots/roots.component';
import { TourDeForceComponent } from './tour-de-force/tour-de-force.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'estampie' , component:EstampieComponent},
  {path:'jitterburg' , component:JitterburgComponent},
  {path:'nrityagana' , component:NrityaganaComponent},
  {path:'roots' , component:RootsComponent},
  {path:'tourdeforce' , component:TourDeForceComponent},
  {path:'contacts' , component:ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
