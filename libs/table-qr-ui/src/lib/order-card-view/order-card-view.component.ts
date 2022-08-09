import { Component, Input, OnInit } from '@angular/core';
import { OrderSummary } from '@jafar-tech/shared/data-access';

@Component({
  selector: 'qr-ui-order-card-view',
  templateUrl: './order-card-view.component.html',
  styleUrls: ['./order-card-view.component.css'],
})
export class OrderCardViewComponent implements OnInit {
  @Input('order') order!: OrderSummary | null;
  constructor() {}

  ngOnInit(): void {}
}
