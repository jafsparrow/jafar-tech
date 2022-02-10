import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = PRODUCTS;

  getProduct() {
    return this.products;
  }
}

export const PRODUCTS = [
  {
    id: 11,
    name: 'Caffe Latte',
    price: 33,
    type: 'juice',
    image: '',
    description: 'its an amazing splend',
    isActive: true,
  },
  {
    id: 12,
    name: 'Mocko creepo',
    price: 33,
    type: 'juice',
    image: '',
    description: 'Juice mix ss splend',
    isActive: true,
  },
];
