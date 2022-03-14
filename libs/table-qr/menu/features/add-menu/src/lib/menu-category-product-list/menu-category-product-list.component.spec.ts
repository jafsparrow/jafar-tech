import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryProductListComponent } from './menu-category-product-list.component';

describe('MenuCategoryProductListComponent', () => {
  let component: MenuCategoryProductListComponent;
  let fixture: ComponentFixture<MenuCategoryProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCategoryProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCategoryProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
