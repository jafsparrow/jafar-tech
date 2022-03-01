import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'qr-ui-bottom-cart-summary',
  templateUrl: './bottom-cart-summary.component.html',
  styleUrls: ['./bottom-cart-summary.component.css'],
})
export class BottomCartSummaryComponent implements OnInit {
  @Input('cartProductsCount') count?: number | null;
  @Input('cartTotal') total?: number | null;
  constructor() {}

  ngOnInit(): void {}
}
