import { CdkDragDrop, DragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Category, Product } from '@jafar-tech/shared/data-access';
import {
  selectProductsFromCategory,
  updateProductSort,
} from '@jafar-tech/table-qr-products-data-access';
import { selectCategories } from '@jafar-tech/table-qr/category/data-access/category';
import { Store } from '@ngrx/store';
import { Observable, ObservableLike, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'jafar-tech-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css'],
})
export class MenuEditComponent implements OnInit, OnDestroy {
  categories$ = this.store.select(selectCategories);
  categories: Category[] = [];
  categoriesSubscription: Subscription;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private store: Store, private dragDropService: DragDrop) {
    this.categoriesSubscription = this.categories$.subscribe(
      (categories) => (this.categories = [...categories])
    );
  }

  ngOnInit(): void {}

  toggleChange(event: MatSlideToggleChange) {
    event.checked ? this.accordion.closeAll() : this.accordion.openAll();
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
    if (event.previousIndex != event.currentIndex) {
      console.log('category order chagned.');
    }
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}
