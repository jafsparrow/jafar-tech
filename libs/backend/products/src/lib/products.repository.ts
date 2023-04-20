import { Organisation } from '@jafar-tech/backend/organisation';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, MongooseError, ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product-dto';
import { PatchProductIndexDto } from './dto/patch-porduct.dto';
import { ProductBoolFieldDto } from './dto/product-bool-field-update.dto';
import { Product } from './models/product.schema';
import { ProductImage } from '@jafar-tech/shared/data-access';
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
    // Note: updating the entire product subdocument with the given CreateProductDto
    // is updating subdocument successfully but chaning the _id to a new value. This is how
    // mongo works as it is repalcing the subdocument with the value. But if we update individual
    // fields of the subdocument then the id won't change.

    const setQueryKeyValueOfProductData = {};

    Object.entries(product).map(
      ([key, value]) =>
        (setQueryKeyValueOfProductData[`products.$[outer].${key}`] = value)
    );

    const reponse = await this.orgModel.findOneAndUpdate(
      { _id: companyId },
      {
        $set: setQueryKeyValueOfProductData,
      },
      {
        arrayFilters: [{ 'outer._id': productId }],
        new: true,
      }
    );
    // Note: the below code would update the product but sets a new _id for the product. this is how mongo works when a data changes in the subdocument.
    // const reponse = await this.orgModel.findOneAndUpdate(
    //   { _id: companyId },
    //   {
    //     $set: { [`products.$[outer]`]: product },
    //   },
    //   {
    //     arrayFilters: [{ 'outer._id': productId }],
    //     new: true,
    //   }
    // );

    return reponse;
  }

  async updateProductImage(
    companyId: string,
    productId: string,
    imageData: ProductImage
  ) {
    try {
      const response = await this.orgModel.findOneAndUpdate(
        { _id: companyId },
        { $push: { 'products.$[outer].image': imageData } },
        { arrayFilters: [{ 'outer._id': productId }] }
      );

      return response;
    } catch (error) {
      throw new MongooseError(error);
    }
  }
}
