import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Organisation } from '@jafar-tech/shared/data-access';
import { Observable, of } from 'rxjs';

@Injectable()
export class OrganisationService {
  constructor(
    private httpClient: HttpClient,

    @Inject('endPointURL') public apiUrl: string
  ) {}

  org: Organisation = {
    address: 'Near Theatre, Ponnani',
    caption: 'Name is the Secret',
    coord: ['21', '2'],
    license: '',
    name: 'Zaatar RestoCafe',
    offDays: ['sun', 'mon'],
    openAllWeek: true,
    type: ['arabian'],
  };
  getOrgDetails(orgId: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/organisation/${orgId}`);
  }
}
