import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qr-ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input('cartItemCount') cartCount?: number | null;
  @Input('navigateUrl') navigateUrl?: string | null;

  @Output() menuClicked = new EventEmitter<string>();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewCart() {
    this.router.navigate([`./shell/${this.navigateUrl}`]);
  }

  viewOrders() {
    console.log('view orders button');
    this.router.navigate(['./shell/order']);
  }
  menuClickedEvent($event: any) {
    this.menuClicked.emit($event.value);
  }
  openBasketDialog() {}
}
