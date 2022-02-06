import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'qr-ui-count-control',
  templateUrl: './count-control.component.html',
  styleUrls: ['./count-control.component.scss'],
})
export class CountControlComponent implements OnInit {
  @Input('count') count!: number;

  @Output() countChange = new EventEmitter<number>();

  ngOnInit(): void {
    if (!this.count) {
      this.count = 0;
    }
  }

  dec() {
    if (this.count == 0) return;
    this.reCount(-1);
  }
  inc() {
    this.reCount(+1);
  }

  reCount(delta: number) {
    this.count = this.count + delta;
    this.countChange.emit(this.count);
  }
}
