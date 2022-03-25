import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jafar-tech-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  printME() {
    window.print();
  }
}
