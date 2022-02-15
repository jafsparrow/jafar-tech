import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCartSummaryComponent } from './bottom-cart-summary.component';

describe('BottomCartSummaryComponent', () => {
  let component: BottomCartSummaryComponent;
  let fixture: ComponentFixture<BottomCartSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomCartSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
