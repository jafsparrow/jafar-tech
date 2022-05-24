import { CdkDragDrop, DragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Category, Product } from '@jafar-tech/shared/data-access';
import {
  selectProductsFromCategory,
  updateProductSort,
} from '@jafar-tech/table-qr-products-data-access';
import { selectCategories } from '@jafar-tech/table-qr/category/data-access/category';
import {
  selectCurrencyCode,
  selectOrganisationId,
} from '@jafar-tech/table-qr/organisation/data-access';
import { Store } from '@ngrx/store';
import { CategoryAddComponent } from 'libs/table-qr/category/features/add/src/lib/category-add/category-add.component';
import { Observable, ObservableLike, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'jafar-tech-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css'],
})
export class MenuEditComponent implements OnInit, OnDestroy {
  categories$ = this.store.select(selectCategories);
  companyId$ = this.store.select(selectOrganisationId);
  selectCurrencyCode$ = this.store.select(selectCurrencyCode);

  categories: Category[] = [];
  categoriesSubscription: Subscription;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(
    private store: Store,
    private dragDropService: DragDrop,
    private dialog: MatDialog
  ) {
    this.categoriesSubscription = this.categories$.subscribe((categories) => {
      console.log('menu componet', categories);
      this.categories = [...categories];
    });
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

  openCategoryDialog() {
    this.dialog.open(CategoryAddComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      // height: '90%',
      data: {},

      panelClass: 'custom-dialog-container',
    });
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}
