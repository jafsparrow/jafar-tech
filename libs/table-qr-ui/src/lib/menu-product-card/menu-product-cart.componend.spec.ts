import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProductCardComponent } from './menu-product-card.component';

describe('MenuProductCartComponent', () => {
  let component: MenuProductCardComponent;
  let fixture: ComponentFixture<MenuProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuProductCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
