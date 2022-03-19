import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  Category,
  Product,
  ProductBoolFieldUpdateData,
} from '@jafar-tech/shared/data-access';
import {
  selectProductsFromCategory,
  updateProductBooleans,
  updateProductSort,
} from '@jafar-tech/table-qr-products-data-access';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'jafar-tech-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCategoryComponent implements OnInit {
  @Input('category') category!: string;

  @Input('companyId') companyId!: string;
  @Input('categories') categories!: Category[];
  categoryProducts$!: Observable<Product[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categoryProducts$ = this.store.select(
      selectProductsFromCategory(this.category)
    );
  }

  productSortChange(sortedProducts: Product[]) {
    const productSortArray = sortedProducts.map((product, index) => ({
      _id: product._id,
      indexInCategory: index,
    }));

    // console.log(productSortArray);

    this.store.dispatch(
      updateProductSort({
        companyId: this.companyId,
        productSortData: productSortArray,
      })
    );
  }

  productBooleanUpdate(event: ProductBoolFieldUpdateData) {
    this.store.dispatch(
      updateProductBooleans({
        companyId: this.companyId,
        data: event,
      })
    );
  }
}
