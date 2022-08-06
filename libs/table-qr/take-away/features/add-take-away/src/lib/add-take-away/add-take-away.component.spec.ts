import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTakeAwayComponent } from './add-take-away.component';

describe('AddTakeAwayComponent', () => {
  let component: AddTakeAwayComponent;
  let fixture: ComponentFixture<AddTakeAwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTakeAwayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTakeAwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
