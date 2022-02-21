import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jafar-tech-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.css'],
})
export class AdminContainerComponent implements OnInit {
  sideMenu: string[] = ['Home', 'Orders', 'Products', 'Promotions'];
  constructor() {}

  ngOnInit(): void {}

  onMenuChange($event: any) {
    console.log($event.options[0]._value);
  }
}
