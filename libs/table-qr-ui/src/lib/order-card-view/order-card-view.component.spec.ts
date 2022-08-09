import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardViewComponent } from './order-card-view.component';

describe('OrderCardViewComponent', () => {
  let component: OrderCardViewComponent;
  let fixture: ComponentFixture<OrderCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
