import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationSummaryComponent } from './organisation-summary.component';

describe('OrganisationSummaryComponent', () => {
  let component: OrganisationSummaryComponent;
  let fixture: ComponentFixture<OrganisationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
