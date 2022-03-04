import { Injectable } from '@angular/core';
import { Organisation } from '@jafar-tech/shared/data-access';
import { Observable, of } from 'rxjs';

@Injectable()
export class OrganisationService {
  getOrgDetails(orgId: any): Observable<Organisation> {
    let org: Organisation = {
      address: 'Near Theatre, Ponnani',
      caption: 'Name is the Secret',
      coord: ['21', '2'],
      license: '',
      name: 'Zaatar RestoCafe',
      offDays: ['sun', 'mon'],
      openAllWeek: true,
      type: ['arabian'],
    };
    console.log('org service get org details');
    return of(org);
  }
}
