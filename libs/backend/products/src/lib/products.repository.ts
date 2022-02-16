import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product-dto';
import { Product } from './models/product.schema';
@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly product: Model<Product>
  ) {}

  getProducts() {
    // return this.product.create({ name: 'hello' });
    // this.product.aggregate().project({array: [{
    //   k:"category",
    //   v
    // }]})
    return this.product.find().sort('category').exec();
  }

  createAProduct(product: CreateProductDto) {
    const newProduct = new this.product(product);
    return newProduct.save();
  }
}
