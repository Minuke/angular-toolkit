import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperButtonComponent } from './wrapper-button.component';

describe('WrapperButtonComponent', () => {
  let component: WrapperButtonComponent;
  let fixture: ComponentFixture<WrapperButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
