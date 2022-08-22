import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehiculo-creation',
  templateUrl: './vehiculo-creation.component.html',
  styleUrls: ['./vehiculo-creation.component.css']
})
export class VehiculoCreationComponent implements OnInit {

  fgValidator: FormGroup | undefined;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.fgValidator=this.fb.group({
      pais:['',[Validators.required]],
      marca:['',[Validators.required]],
      linea:['',[Validators.required]],
      modelo:['',[Validators.required]],
      placa:['',[Validators.required]],
      propietario:['',[Validators.required]],
      color:['',[Validators.required]],
      capacidad:['',[Validators.required]],
      combustible:['',[Validators.required]],
      tipo:['',[Validators.required]],
      valor:['',[Validators.required]],
      kilometraje:['',[Validators.required]],
      servicio:['',[Validators.required]]
  });
  }

}
