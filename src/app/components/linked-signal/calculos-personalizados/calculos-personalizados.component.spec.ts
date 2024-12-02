import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculosPersonalizadosComponent } from './calculos-personalizados.component';

describe('CalculosPersonalizadosComponent', () => {
  let component: CalculosPersonalizadosComponent;
  let fixture: ComponentFixture<CalculosPersonalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculosPersonalizadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculosPersonalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
