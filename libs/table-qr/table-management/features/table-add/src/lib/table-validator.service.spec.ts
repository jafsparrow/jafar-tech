import { TestBed } from '@angular/core/testing';

import { TableValidatorService } from './table-validator.service';

describe('TableValidatorService', () => {
  let service: TableValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
