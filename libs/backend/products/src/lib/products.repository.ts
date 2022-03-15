import { Organisation } from '@jafar-tech/backend/organisation';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product-dto';
import { PatchProductIndexDto } from './dto/patch-porduct.dto';
import { Product } from './models/product.schema';
@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel(Organisation.name)
    private readonly orgModel: Model<Organisation>,
    @InjectModel(Product.name)
    private readonly product: Model<Product>
  ) {
    console.log('Products repository', Organisation.name);
  }

  getProducts() {
    // return this.product.create({ name: 'hello' });
    // this.product.aggregate().project({array: [{
    //   k:"category",s
    //   v
    // }]})
    return this.product.find().sort('category').exec();
  }

  async createAProduct(companyId: string, product: CreateProductDto) {
    const newProduct = new this.product(product);
    let organisation = await this.orgModel.findById(companyId);

    organisation.products.push(newProduct);
    return organisation.save();
  }

  async bulkUpdate(companyId: string, data: PatchProductIndexDto[]) {
    let organisation = await this.orgModel.findById(companyId);

    let sortMap = {};
    data.forEach((item) => (sortMap[item._id] = item.indexInCategory));
    console.log(sortMap);

    // let sortedProduct = organisation.products.map((product) => ({
    //   ...product,
    //   indexInCategory: sortMap[product._id],
    // }));
    console.log(organisation.products.length);
    organisation.products.forEach((product) => {
      if (Object.keys(sortMap).includes(product._id)) {
        console.log(sortMap[product._id]);
        product.indexInCategory = sortMap[product._id];
      }

      return product;
    });

    console.log(
      organisation.products.forEach((item) =>
        console.log(item.name, item.indexInCategory)
      )
    );
    return await organisation.save();
    // return await this.orgModel.bulkWrite(
    //   data.map((item) => ({
    //     updateOretne: {
    //       filter: { _id: companyId, 'products._id': item._id },
    //       update: {
    //         $set: {
    //           'products.indexInCategory': item.indexInCategory,
    //         },
    //       },
    //       upsert: true,
    //     },
    //   }))
    // );
  }
}
