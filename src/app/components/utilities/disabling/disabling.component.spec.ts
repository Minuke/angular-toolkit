import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisablingComponent } from './disabling.component';

describe('DisablingComponent', () => {
  let component: DisablingComponent;
  let fixture: ComponentFixture<DisablingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisablingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisablingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
