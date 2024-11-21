import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorOpcionesComponent } from './selector-opciones.component';

describe('SelectorOpcionesComponent', () => {
  let component: SelectorOpcionesComponent;
  let fixture: ComponentFixture<SelectorOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorOpcionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
