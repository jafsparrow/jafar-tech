import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderItem, OrderItemStatus } from '@jafar-tech/shared/data-access';
import {
  loadRecentOrders,
  selectFilteredOrderItemsFromRecentOrders,
  selectUserFilteredCategories,
  updateOrderItemStatus,
  updateSelectedFilteredCategories,
} from '@jafar-tech/table-qr-orders-data-access';
import { selectCategories } from '@jafar-tech/table-qr/category/data-access/category';
import { Store } from '@ngrx/store';
import { Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'jafar-tech-kitchen-order-view',
  templateUrl: './kitchen-order-view.component.html',
  styleUrls: ['./kitchen-order-view.component.css'],
})
export class KitchenOrderViewComponent implements OnInit {
  selectOrderItemsFromRecentOrders$ = this.store.select(
    selectFilteredOrderItemsFromRecentOrders
  );

  selectUserFilteredCategories$ = this.store.select(selectUserFilteredCategories);
  categories$ = this.store.select(selectCategories);


  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryControl = new FormControl();
  categorySelectControl= new FormControl();

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


    this.subscription = this.selectOrderItemsFromRecentOrders$.subscribe(
      (orders) => {
        this.dataSource = new MatTableDataSource(orders);
      }
    );
  }
  ngOnInit(): void {
    this.store.dispatch(loadRecentOrders());
    this.selectUserFilteredCategories$.pipe(
      tap((data) => {
        this.categorySelectControl.setValue(data)
      }), take(1)
      
      
    ).subscribe()
 
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
    this.store.dispatch(updateSelectedFilteredCategories({filteredCategories: event.value}))
  }
}
