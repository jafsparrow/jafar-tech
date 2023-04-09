import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import {
  Organisation,
  Product,
  ProductBoolFieldUpdateData,
  ProductSortData,
} from '@jafar-tech/shared/data-access';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private httpClient: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}

  loadDruids(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(`${this.apiUrl}/products/list`)
      .pipe(map((data: any) => data['chicken']));
  }

  loadProductsCategoryVice(): Observable<{ [Key: string]: Product[] }> {
    return this.httpClient.get<{ [Key: string]: Product[] }>(
      `${this.apiUrl}/products/list`
    );
  }

  addProduct(product: Product) {
    console.log(product);
    return this.httpClient.post(`${this.apiUrl}/products`, product);
  }

  updateProductsSort(
    companyId: string,
    productSoftData: ProductSortData[]
  ): Observable<Organisation> {
    return this.httpClient.patch<Organisation>(
      `${this.apiUrl}/products/${companyId}`,
      productSoftData
    );
  }

  updateProductBoolean(
    companyId: string,
    data: ProductBoolFieldUpdateData
  ): Observable<Organisation> {
    return this.httpClient.put<Organisation>(
      `${this.apiUrl}/products/${companyId}`,
      data
    );
  }

  updateProduct(productId: string, product: Product): Observable<Organisation> {
    return this.httpClient
      .patch<Organisation>(`${this.apiUrl}/products/${productId}`, product)
      .pipe(tap((res) => console.log('ressss', res)));
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
