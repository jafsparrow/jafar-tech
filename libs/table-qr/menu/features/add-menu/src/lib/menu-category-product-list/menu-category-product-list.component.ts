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
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import {
  Category,
  Product,
  ProductBoolFieldUpdateData,
} from '@jafar-tech/shared/data-access';
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

  @Output('booleanFieldUpdate')
  onBooleanUpdate: EventEmitter<ProductBoolFieldUpdateData> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog(product: Product) {
    const dialogRef = this.dialog.open(ProductAddComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      // width: '95%',
      panelClass: 'custom-dialog-container',
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
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      // width: '95%',
      panelClass: 'custom-dialog-container',
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
    if (event.previousIndex != event.currentIndex) {
      this.onSorting.emit(this.sortedProducts);
    }
  }

  toggleChange(event: MatSlideToggleChange, product: Product) {
    let data: ProductBoolFieldUpdateData = {
      _id: product._id,
      fieldName: 'isAvailable',
      value: event.checked,
    };
    this.onBooleanUpdate.emit(data);
  }
  updateProductPopular(product: Product) {
    let data: ProductBoolFieldUpdateData = {
      _id: product._id,
      fieldName: 'popular',
      value: product.popular ? false : true,
    };
    this.onBooleanUpdate.emit(data);
  }
}
