import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '@jafar-tech/shared/data-access';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  loadDruids(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>('http://localhost:3335/api/products/list')
      .pipe(map((data: any) => data['chicken']));
  }

  loadProductsCategoryVice(): Observable<{ [Key: string]: Product[] }> {
    return this.httpClient.get<{ [Key: string]: Product[] }>(
      'http://localhost:3335/api/products/list'
    );
  }

  addProduct(product: Product) {
    console.log('adding a product');
    console.log(product);
    return this.httpClient.post('http://localhost:3335/api/products', product);
  }
}

// PRODUCTS: Product[] = [
//   {
//     id: '1234',
//     name: 'Mocktail green apple',
//     price: 33,
//     description:
//       'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
//     type: 'juice',
//     isActive: true,
//   },
//   {
//     id: '1235',
//     name: 'Showarma Plate',
//     price: 55,
//     description:
//       'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
//     type: 'showarma',
//     isActive: true,
//   },
//   {
//     id: '1236',
//     name: 'Broated Chicken',
//     price: 66,
//     description:
//       'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
//     type: 'broasted',
//     isActive: true,
//   },
//   {
//     id: '1237',
//     name: 'Apple Juice',
//     price: 33,
//     description:
//       'lorem ipsum beautiful sit and amazing blend of mix of this and that...',
//     type: 'juice',
//     isActive: true,
//   },
// ];
