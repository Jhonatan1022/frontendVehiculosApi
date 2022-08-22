import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoCreationComponent } from './vehiculo-creation.component';

describe('VehiculoCreationComponent', () => {
  let component: VehiculoCreationComponent;
  let fixture: ComponentFixture<VehiculoCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
