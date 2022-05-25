import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { OrderStatus } from '@jafar-tech/shared/data-access';
import {
  loadRecentOrders,
  selectRecentOrders,
  updateOrderStatus,
} from '@jafar-tech/table-qr-orders-data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'jafar-tech-live-order',
  templateUrl: './live-order.component.html',
  styleUrls: ['./live-order.component.css'],
})
export class LiveOrderComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  recentOrders$ = this.store.select(selectRecentOrders);
  sampleOrder = {
    id: 23343,
    status: 'preparing',
    items: [
      {
        name: 'Juice apricoto',
        status: 'ready',
        modifiers: ['Soy milk', 'Gun Powder'],
      },
    ],
  };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadRecentOrders());
  }

  updateStatus(orderId: string, status: string) {
    let newStatus: OrderStatus = OrderStatus.READY;
    if (status == 'served') {
      newStatus = OrderStatus.SERVED;
    } else if (status == 'pay') {
      newStatus = OrderStatus.PAID;
    }
    if (confirm('Are you Sure.?')) {
      this.store.dispatch(updateOrderStatus({ orderId, status: newStatus }));
    }
  }

  getClass(status: string) {
    switch (status.toLowerCase()) {
      case 'ready':
        return 'text-green';

      case 'preparing':
        return 'text-orange';

      default:
        return 'text-red';
    }
  }
}
