import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'qr-ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input('cartItemCount') cartCount?: number | null;

  constructor() {}

  ngOnInit(): void {}

  openBasketDialog() {}
}
