import { Test } from '@nestjs/testing';
import { BackendProductsController } from './backend-products.controller';

describe('BackendProductsController', () => {
  let controller: BackendProductsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [BackendProductsController],
    }).compile();

    controller = module.get(BackendProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
