import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { selectNumberOfItemsInCart } from '@jafar-tech/table-qr-cart-data-access';
import {
  loadProductsCategoryVice,
  selectProductByCategories,
} from '@jafar-tech/table-qr-products-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, OnDestroy {
  cartCount$ = this.store.select(selectNumberOfItemsInCart);

  prodcutByCategory$ = this.store.select(selectProductByCategories);

  constructor(private store: Store, private router: Router) {}
  ngOnDestroy(): void {
    console.log('on destroy fired in shell container component');
  }

  ngOnInit(): void {
    console.log('shell module on init');
    this.store.dispatch(loadProductsCategoryVice());
  }

  menuClicked(menu: string) {
    console.log('menu clicked', menu);
    this.scrollTo(menu);
  }

  scrollTo(id: string) {
    document.getElementById(id)!.scrollIntoView();
  }
}
