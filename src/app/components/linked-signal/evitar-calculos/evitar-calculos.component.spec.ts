import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvitarCalculosComponent } from './evitar-calculos.component';

describe('EvitarCalculosComponent', () => {
  let component: EvitarCalculosComponent;
  let fixture: ComponentFixture<EvitarCalculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvitarCalculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvitarCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
