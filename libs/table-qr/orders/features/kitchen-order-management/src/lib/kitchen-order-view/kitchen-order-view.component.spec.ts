import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenOrderViewComponent } from './kitchen-order-view.component';

describe('KitchenOrderViewComponent', () => {
  let component: KitchenOrderViewComponent;
  let fixture: ComponentFixture<KitchenOrderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenOrderViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
