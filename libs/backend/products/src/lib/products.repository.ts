import { Organisation } from '@jafar-tech/backend/organisation';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product-dto';
import { PatchProductIndexDto } from './dto/patch-porduct.dto';
import { ProductBoolFieldDto } from './dto/product-bool-field-update.dto';
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
    // defining sortmap to search for the products.
    let sortMap = {};
    data.forEach((item) => (sortMap[item._id] = item.indexInCategory));
    organisation.products.map((product) => {
      let productId: ObjectId = product._id;
      if (Object.keys(sortMap).includes(productId.toString())) {
        product.indexInCategory = sortMap[product._id];
        return product;
      }
      return product;
    });

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

  updateProductInfo(companyId: string, data: ProductBoolFieldDto) {
    return this.orgModel.findOneAndUpdate(
      { _id: companyId },
      {
        $set: { [`products.$[outer].${data.fieldName}`]: data.value },
      },
      {
        arrayFilters: [{ 'outer._id': data._id }],
        new: true,
      }
    );
  }

  async updateProduct(
    companyId: string,
    productId: string,
    product: CreateProductDto
  ) {
    console.log('productId', productId);
    const reponse = await this.orgModel.findOneAndUpdate(
      { _id: companyId },
      {
        $set: { [`products.$[outer]`]: product },
      },
      {
        arrayFilters: [{ 'outer._id': productId }],
        new: true,
      }
    );

    console.log('product update', reponse);

    return reponse;
  }
}
