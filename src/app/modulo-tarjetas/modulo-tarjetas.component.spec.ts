import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloTarjetasComponent } from './modulo-tarjetas.component';

describe('ModuloTarjetasComponent', () => {
  let component: ModuloTarjetasComponent;
  let fixture: ComponentFixture<ModuloTarjetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuloTarjetasComponent]
    });
    fixture = TestBed.createComponent(ModuloTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
