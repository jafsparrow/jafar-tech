import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCountDialogComponent } from './product-count-dialog.component';

describe('ProductCountDialogComponent', () => {
  let component: ProductCountDialogComponent;
  let fixture: ComponentFixture<ProductCountDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCountDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
