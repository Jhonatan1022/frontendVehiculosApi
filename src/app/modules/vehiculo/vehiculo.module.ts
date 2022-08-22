import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculoRoutingModule } from './vehiculo-routing.module';
import { VehiculoCreationComponent } from './vehiculo-creation/vehiculo-creation.component';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VehiculoCreationComponent,
    VehiculoListComponent
  ],
  imports: [
    CommonModule,
    VehiculoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class VehiculoModule { }
