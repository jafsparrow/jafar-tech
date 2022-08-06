import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Product, User } from '@jafar-tech/shared/data-access';
import {
  selectCartCreatedForUser,
  selectCartTotal,
  selectNumberOfItemsInCart,
} from '@jafar-tech/table-qr-cart-data-access';
import {
  selectAllProducts,
  selectProductsArray,
} from '@jafar-tech/table-qr-products-data-access';
import { ProductDetailComponent } from '@jafar-tech/table-qr/products/features/detail';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'jafar-tech-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit, AfterViewInit, OnDestroy {
  products$: Observable<Product[]> = this.store.select(selectAllProducts);
  cartCount$ = this.store.select(selectNumberOfItemsInCart);
  cartTotal$ = this.store.select(selectCartTotal);
  cartCreatedForUser$ = this.store.select(selectCartCreatedForUser);

  displayedColumns: string[] = ['code', 'name', 'price', 'actions', 'category'];
  dataSource!: MatTableDataSource<Product>;

  subscription: Subscription;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.subscription = this.products$.subscribe((products) => {
      console.log('prodcut', products);
      this.dataSource = new MatTableDataSource(products);
    });
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openProductViewDialog(product: Product) {
    this.dialog.open(ProductDetailComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      // height: '100%',
      // width: '100%',
      data: {
        product,
      },
    });
  }

  openCart(cartUserFor: any) {
    console.log(cartUserFor);
    if (cartUserFor.userSelected) {
      this.router.navigate(['../cart']);

      return;
    }
    alert('Please Select a Table to create the Order');
  }
}
