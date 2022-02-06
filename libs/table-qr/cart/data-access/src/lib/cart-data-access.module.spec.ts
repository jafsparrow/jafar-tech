import { async, TestBed } from '@angular/core/testing';
import { CartDataAccessModule } from './cart-data-access.module';

describe('CartDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CartDataAccessModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(CartDataAccessModule).toBeDefined();
  });
});
