import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '@jafar-tech/shared/data-access';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  PRODUCTS: Product[] = [
    {
      id: '1234',
      name: 'Mocktail green apple',
      price: 33,
      description:
        'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
      type: 'juice',
      isActive: true,
    },
    {
      id: '1235',
      name: 'Showarma Plate',
      price: 55,
      description:
        'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
      type: 'showarma',
      isActive: true,
    },
    {
      id: '1236',
      name: 'Broated Chicken',
      price: 66,
      description:
        'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
      type: 'broasted',
      isActive: true,
    },
    {
      id: '1237',
      name: 'Apple Juice',
      price: 33,
      description:
        'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
      type: 'juice',
      isActive: true,
    },
  ];
  constructor(private httpClient: HttpClient) {}

  loadDruids(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>('http://localhost:3335/api/products/list')
      .pipe(map((data: any) => data['chicken']));
    this.httpClient
      .get('http://localhost:3335/api/products/list')
      .subscribe((result) => console.log(result));

    return of(this.PRODUCTS);
  }

  loadProductsCategoryVice(): Observable<{ [Key: string]: Product[] }> {
    return this.httpClient.get<{ [Key: string]: Product[] }>(
      'http://localhost:3335/api/products/list'
    );
  }
}
