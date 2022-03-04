import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Organisation } from './+state/organisation.reducer';

@Injectable()
export class OrganisationService {
  getOrgDetails(orgId: any): Observable<Organisation> {
    let org: Organisation = {
      address: '',
      caption: '',
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
