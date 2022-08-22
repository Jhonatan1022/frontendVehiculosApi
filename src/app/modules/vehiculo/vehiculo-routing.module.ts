import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VehiculoCreationComponent} from './vehiculo-creation/vehiculo-creation.component';
import{VehiculoListComponent} from './vehiculo-list/vehiculo-list.component';

const routes: Routes = [
  {
    path:'vehiculo',
    component:VehiculoListComponent
  },
  {
    path:'vehiculo-creation',
    component:VehiculoCreationComponent
  },
  {
    path:'vehiculo-list',
    component:VehiculoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculoRoutingModule { }
