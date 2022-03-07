import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '@jafar-tech/shared/data-access';
import { selectProductsArray } from '@jafar-tech/table-qr-products-data-access';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'jafar-tech-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit, AfterViewInit, OnDestroy {
  products$: Observable<Product[]> = this.store.select(selectProductsArray);

  displayedColumns: string[] = ['code', 'name', 'price', 'actions', 'category'];
  dataSource!: MatTableDataSource<Product>;

  subscription: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private store: Store) {
    this.subscription = this.products$.subscribe((products) => {
      console.log('prodcut', products);
      this.dataSource = new MatTableDataSource(products);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
  viewProduct(product: Product) {
    console.log(product);
  }
}
