import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category, Product } from '@jafar-tech/shared/data-access';
import { ProductAddComponent } from '@jafar-tech/table-qr/products/features/add';

@Component({
  selector: 'jafar-tech-menu-category-product-list',
  templateUrl: './menu-category-product-list.component.html',
  styleUrls: ['./menu-category-product-list.component.css'],
})
export class MenuCategoryProductListComponent implements OnInit {
  @Input('products') products!: Product[];
  @Input('category') category!: string;
  @Input('categories') categories!: Category[];
  sortedProducts: Product[] = [];

  @Output('sortingChanged') onSorting: EventEmitter<Product[]> =
    new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog(product: Product) {
    const dialogRef = this.dialog.open(ProductAddComponent, {
      position: { right: '0' },
      data: {
        product,
        isEdit: true,
        category: this.category,
        categories: this.categories.map((cat) => cat.name),
      },
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  openAddProductDailog() {
    const dialogRef = this.dialog.open(ProductAddComponent, {
      data: {
        isEdit: false,
        category: this.category,

        categories: this.categories.map((cat) => cat.name),
      },
    });
  }

  ngOnInit(): void {
    this.sortedProducts = this.products;

    console.log(this.categories);
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
