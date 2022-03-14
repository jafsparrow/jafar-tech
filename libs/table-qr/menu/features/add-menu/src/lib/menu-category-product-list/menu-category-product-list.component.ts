import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Product } from '@jafar-tech/shared/data-access';

@Component({
  selector: 'jafar-tech-menu-category-product-list',
  templateUrl: './menu-category-product-list.component.html',
  styleUrls: ['./menu-category-product-list.component.css'],
})
export class MenuCategoryProductListComponent implements OnInit {
  @Input('products') products!: Product[];
  sortedProducts: Product[] = [];

  @Output('sortingChanged') onSorting: EventEmitter<Product[]> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.sortedProducts = this.products;
  }
  ngOnChanges(): void {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.sortedProducts,
      event.previousIndex,
      event.currentIndex
    );

    this.onSorting.emit(this.sortedProducts);
  }
}
