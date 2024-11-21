import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBidirectionalComponent } from './parent-bidirectional.component';

describe('ParentBidirectionalComponent', () => {
  let component: ParentBidirectionalComponent;
  let fixture: ComponentFixture<ParentBidirectionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentBidirectionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentBidirectionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
