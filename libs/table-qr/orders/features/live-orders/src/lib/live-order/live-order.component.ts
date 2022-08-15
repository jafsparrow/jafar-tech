import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { OrderStatus, OrderSummary } from '@jafar-tech/shared/data-access';
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
  @ViewChildren('Order') order!: QueryList<ElementRef>;

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  recentOrders$ = this.store.select(selectRecentOrders);
  // sampleOrder = {
  //   id: 23343,
  //   status: 'preparing',
  //   items: [
  //     {
  //       name: 'Juice apricoto',
  //       status: 'ready',
  //       modifiers: ['Soy milk', 'Gun Powder'],
  //     },
  //   ],
  // };

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadRecentOrders());
  }

  identifyer = (index: number, order: OrderSummary) => order.orderNumber;

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

  printPage(item: MatExpansionPanel, index: number) {
    console.log(item);

    const printHtml = window.open('', 'PRINT', 'height=400,width=600');

    printHtml!.document.write('<html><head>');
    printHtml!.document.write(item._body.nativeElement.innerHTML);
    printHtml!.document.write('</body></html>');

    printHtml!.document.close();
    printHtml!.focus();

    printHtml!.print();
    printHtml!.close();

    return true;
  }
}
