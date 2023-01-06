import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  Organisation,
  Table,
  TableSection,
} from '@jafar-tech/shared/data-access';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TableManagementService {
  constructor(
    private http: HttpClient,
    @Inject('endPointURL') private apiUrl: string
  ) {}

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(`${this.apiUrl}/tablemanagement`);
  }

  createTableSection(tableSectionData: string) {
    let value = { name: tableSectionData };
    const url = `${this.apiUrl}/section`;

    return this.http.post<Organisation>(url, value);
  }
}
