import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{VehiculoCreationComponent} from './modules/vehiculo/vehiculo-creation/vehiculo-creation.component';
import{VehiculoListComponent} from './modules/vehiculo/vehiculo-list/vehiculo-list.component';

const routes: Routes = [
  {
    path:'',
    component:VehiculoCreationComponent
  },
  {
    path:'registrar',
    component:VehiculoCreationComponent
  },
  {
    path:'listar',
    component:VehiculoListComponent
  },
  {
    path:'modules',
    loadChildren: ()=> import('./modules/vehiculo/vehiculo.module').then(m=>m.VehiculoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
