import { Component, OnInit } from '@angular/core';
import { selectCart } from '@jafar-tech/table-qr-cart-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$ = this.store.select(selectCart);
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
