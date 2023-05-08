import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloTransaccionesComponent } from './modulo-transacciones.component';

describe('ModuloTransaccionesComponent', () => {
  let component: ModuloTransaccionesComponent;
  let fixture: ComponentFixture<ModuloTransaccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloTransaccionesComponent]
    });
    fixture = TestBed.createComponent(ModuloTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
