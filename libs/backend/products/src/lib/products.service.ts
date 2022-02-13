import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-dto';
import { Product } from './models/product.schema';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductsRepository) {}
  private products = PRODUCTS;

  async getProduct() {
    let products: Product[] = await this.productRepository.getProducts();

    let categoryVice = {};

    products.map((item) => {
      if (categoryVice[item.category]) {
        categoryVice[item.category] = [...categoryVice[item.category], item];
      } else {
        categoryVice[item.category] = [];
      }
    });

    return categoryVice;
  }

  createProduct(product: CreateProductDto) {
    return this.productRepository.createAProduct(product);
  }
}
33;
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
