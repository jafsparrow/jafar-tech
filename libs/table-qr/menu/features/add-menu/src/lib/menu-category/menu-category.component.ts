import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Product } from '@jafar-tech/shared/data-access';
import {
  selectProductsFromCategory,
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
  categoryProducts$!: Observable<Product[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categoryProducts$ = this.store.select(
      selectProductsFromCategory(this.category)
    );
  }

  productSortChaange(sortedProducts: Product[]) {
    const productSortArray = sortedProducts.map((product, index) => ({
      _id: product._id,
      indexInCategory: index,
    }));

    // console.log(productSortArray);

    this.store.dispatch(
      updateProductSort({
        companyId: '6226fba3209ec7f5ebd956e7',
        productSortData: productSortArray,
      })
    );
  }
}
