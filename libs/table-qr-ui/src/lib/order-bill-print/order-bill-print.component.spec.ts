import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBillPrintComponent } from './order-bill-print.component';

describe('OrderBillPrintComponent', () => {
  let component: OrderBillPrintComponent;
  let fixture: ComponentFixture<OrderBillPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderBillPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBillPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
