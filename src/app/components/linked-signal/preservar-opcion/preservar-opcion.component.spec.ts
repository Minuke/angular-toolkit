import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreservarOpcionComponent } from './preservar-opcion.component';

describe('PreservarOpcionComponent', () => {
  let component: PreservarOpcionComponent;
  let fixture: ComponentFixture<PreservarOpcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreservarOpcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreservarOpcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
