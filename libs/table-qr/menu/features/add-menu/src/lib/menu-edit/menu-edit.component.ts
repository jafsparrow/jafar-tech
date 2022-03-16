import { CdkDragDrop, DragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Category, Product } from '@jafar-tech/shared/data-access';
import {
  selectProductsFromCategory,
  updateProductSort,
} from '@jafar-tech/table-qr-products-data-access';
import { selectCategories } from '@jafar-tech/table-qr/category/data-access/category';
import { Store } from '@ngrx/store';
import { Observable, ObservableLike, take, tap } from 'rxjs';

@Component({
  selector: 'jafar-tech-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css'],
})
export class MenuEditComponent implements OnInit {
  categories$ = this.store.select(selectCategories);

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private store: Store, private dragDropService: DragDrop) {}

  ngOnInit(): void {
    console.log('oninit fired');
  }

  toggleChange(event: MatSlideToggleChange) {
    event.checked ? this.accordion.closeAll() : this.accordion.openAll();
  }
}
