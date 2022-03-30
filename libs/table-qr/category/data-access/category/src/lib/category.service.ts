import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Category, Organisation } from '@jafar-tech/shared/data-access';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(
    private http: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}

  addCategory(categoryData: Category) {
    let updateCategory = { ...categoryData };

    const url = `${this.apiUrl}/category`;

    return this.http.post<Organisation>(url, updateCategory);
  }
}
