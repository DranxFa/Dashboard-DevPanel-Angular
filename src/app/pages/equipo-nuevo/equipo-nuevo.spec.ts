import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoNuevo } from './equipo-nuevo';

describe('EquipoNuevo', () => {
  let component: EquipoNuevo;
  let fixture: ComponentFixture<EquipoNuevo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipoNuevo],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipoNuevo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
