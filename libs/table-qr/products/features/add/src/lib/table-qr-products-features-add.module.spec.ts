import { async, TestBed } from '@angular/core/testing';
import { TableQrProductsFeaturesAddModule } from './table-qr-products-features-add.module';

describe('TableQrProductsFeaturesAddModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TableQrProductsFeaturesAddModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(TableQrProductsFeaturesAddModule).toBeDefined();
  });
});
