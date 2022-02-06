import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'jafar-tech-product-count-dialog',
  templateUrl: './product-count-dialog.component.html',
  styleUrls: ['./product-count-dialog.component.scss'],
})
export class ProductCountDialogComponent implements OnInit {
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  selectedCount!: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public product: any,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.selectedCount == null) {
      this.selectedCount = 1;
    }
    console.log(this.product);
  }

  addToCart(selectedCount: number) {
    console.log('updating cart', selectedCount);
  }
  closeDialog() {
    console.log('closed');
    this.dialog.closeAll();
  }
}
