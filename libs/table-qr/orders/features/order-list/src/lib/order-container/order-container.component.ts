import { Component, OnInit } from '@angular/core';
import { selectPendingOrder } from '@jafar-tech/table-qr-orders-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.css'],
})
export class OrderContainerComponent implements OnInit {
  orderSummary$ = this.store.select(selectPendingOrder);
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
