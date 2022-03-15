import { CdkDragDrop, DragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
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
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  categories$ = this.store.select(selectCategories);
  products: Product[] = [];

  constructor(private store: Store, private dragDropService: DragDrop) {}

  ngOnInit(): void {
    console.log('oninit fired');
  }

  getProductsOfCategory(category: string): Observable<Product[]> {
    console.log('getting product from template fired');
    return this.store
      .select(selectProductsFromCategory(category))
      .pipe(tap((data) => console.log('in tap', data)));
  }
}
