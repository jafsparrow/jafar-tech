import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'qr-ui-menu-product-card',
  templateUrl: './menu-product-card.component.html',
  styleUrls: ['./menu-product-card.component.scss'],
})
export class MenuProductCardComponent implements OnInit {
  @Input('product') product: any;
  @Input('selectedCount') count!: number;

  para: string =
    'A mix of Jenuine shit and crap Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore, in quasi atque quo corrupti corporis eum omnis itaque quaerat impedit vel numquam quibusdam earumquos maxime perferendis incidunt nesciunt';
  constructor() {}

  ngOnInit(): void {
    // console.log(this.product);
  }
}
