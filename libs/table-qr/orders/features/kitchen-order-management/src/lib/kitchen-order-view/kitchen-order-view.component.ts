import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderItem, OrderItemStatus } from '@jafar-tech/shared/data-access';
import {
  loadRecentOrders,
  selectFilteredOrderItemsFromRecentOrders,
  selectOrderItemsFromRecentOrders,
  selectRecentOrders,
  updateOrderItemStatus,
  updateSelectedFilteredCategories,
} from '@jafar-tech/table-qr-orders-data-access';
import { selectCategories } from '@jafar-tech/table-qr/category/data-access/category';
import { Store } from '@ngrx/store';
import { map, Observable, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'jafar-tech-kitchen-order-view',
  templateUrl: './kitchen-order-view.component.html',
  styleUrls: ['./kitchen-order-view.component.css'],
})
export class KitchenOrderViewComponent implements OnInit {
  selectedCategories: string[] =[];
  selectOrderItemsFromRecentOrders$ = this.store.select(
    selectFilteredOrderItemsFromRecentOrders
  );
  categories$ = this.store.select(selectCategories);


  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryControl = new FormControl();
  filterdCategories$: Observable<string[]>;
  categories: string[] = ['one','two'];
  allCategories: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  displayedColumns: string[] = [
    'code',
    'name',
    'count',
    'category',
    'total',
    'action',
  ];
  dataSource!: MatTableDataSource<OrderItem>;
  subscription: Subscription;

  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild('categoryInput') categoryInput!: ElementRef<HTMLInputElement>;

  constructor(private store: Store) {
    this.filterdCategories$ = this.categoryControl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allCategories.slice()
      )
    );

    this.subscription = this.selectOrderItemsFromRecentOrders$.subscribe(
      (orders) => {
        console.log('orders', orders);
        this.dataSource = new MatTableDataSource(orders);
      }
    );
  }
  ngOnInit(): void {
    this.store.dispatch(loadRecentOrders());

    this.categories$.subscribe(data => console.log('categorydd',data))
 
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.categories.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.categoryControl.setValue(null);
  }

  remove(category: string): void {
    const index = this.categories.indexOf(category);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.viewValue);
    console.log(this.categories);
    this.categoryInput.nativeElement.value = '';
    this.categoryControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    let samp = this.allCategories.filter((cateogry) =>
      cateogry.toLowerCase().includes(filterValue)
    );

    console.log(samp);
    return samp;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changeStatus(item: any) {}

  updateOrderItemStatus(item: OrderItem, status: string) {
    console.log('current item ', item);
    this.store.dispatch(
      updateOrderItemStatus({
        orderId: item.orderId!,
        orderItemKey: item.key!,
        orderItemStatus: status as OrderItemStatus,
      })
    );
  }

  getClass(status: string) {
    switch (status.toLowerCase()) {
      case 'ready':
        return 'text-green';

      case 'inprogress':
        return 'text-orange';

      default:
        return 'text-red';
    }
  }


  onChangeCategorySelection(event:any) {

    console.log(event.value)
    this.store.dispatch(updateSelectedFilteredCategories({filteredCategories: event.value}))
  }
}
