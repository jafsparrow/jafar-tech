import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Category } from '@jafar-tech/shared/data-access';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(
    private http: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}

  addCategory(companyId: string, categoryData: Category) {
    let updateCategory = { ...categoryData, companyId: companyId };

    const url = `${this.apiUrl}/category`;

    return this.http.post<Category>(url, updateCategory);
  }
}
