import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperDynamicTableComponent } from './wrapper-dynamic-table.component';

describe('WrapperDynamicTableComponent', () => {
  let component: WrapperDynamicTableComponent;
  let fixture: ComponentFixture<WrapperDynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperDynamicTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
