import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'jafar-tech-live-order',
  templateUrl: './live-order.component.html',
  styleUrls: ['./live-order.component.css'],
})
export class LiveOrderComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;

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

  constructor() {}

  ngOnInit(): void {}

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
