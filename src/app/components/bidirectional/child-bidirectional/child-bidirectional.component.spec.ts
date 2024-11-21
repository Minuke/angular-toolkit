import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBidirectionalComponent } from './child-bidirectional.component';

describe('ChildBidirectionalComponent', () => {
  let component: ChildBidirectionalComponent;
  let fixture: ComponentFixture<ChildBidirectionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildBidirectionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBidirectionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
