import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProductViewComponent } from './select-product-view.component';

describe('SelectProductViewComponent', () => {
  let component: SelectProductViewComponent;
  let fixture: ComponentFixture<SelectProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProductViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
