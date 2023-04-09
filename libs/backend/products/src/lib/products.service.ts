import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-dto';
import { PatchProductIndexDto } from './dto/patch-porduct.dto';
import { ProductBoolFieldDto } from './dto/product-bool-field-update.dto';
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
      // if (categoryVice[item.category]) {
      //   categoryVice[item.category] = [...categoryVice[item.category], item];
      // } else {
      //   categoryVice[item.category] = [];
      // }

      categoryVice[item.category] = [
        ...(categoryVice[item.category] || []),
        item,
      ];
    });

    return categoryVice;
  }

  createProduct(companyId: string, product: CreateProductDto) {
    return this.productRepository.createAProduct(companyId, product);
  }

  updateProductsIndex(companyId: string, data: PatchProductIndexDto[]) {
    return this.productRepository.bulkUpdate(companyId, data);
  }

  updateProductInfo(
    companyId: string,
    productId: string,
    data: ProductBoolFieldDto
  ) {
    return this.productRepository.updateProductInfo(companyId, data);
  }

  updateProduct(companyId: string, productId: string, data: CreateProductDto) {
    return this.productRepository.updateProduct(companyId, productId, data);
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
