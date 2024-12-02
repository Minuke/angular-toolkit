import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SincronizarEstadoComponent } from './sincronizar-estado.component';

describe('SincronizarEstadoComponent', () => {
  let component: SincronizarEstadoComponent;
  let fixture: ComponentFixture<SincronizarEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SincronizarEstadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SincronizarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
