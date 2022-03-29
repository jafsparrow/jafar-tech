import { Organisation } from '@jafar-tech/backend/organisation';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './models/category.schema';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(Organisation.name)
    private readonly orgModel: Model<Organisation>,
    @InjectModel(Category.name)
    private readonly category: Model<Category>
  ) {}
  async createCategory(companyId: string, categoryDto: CreateCategoryDto) {
    const newCategory = new this.category(categoryDto);

    let organisation = await this.orgModel.findById(companyId);
    organisation.categories.push(newCategory);
    let savedData = null;
    try {
      savedData = await organisation.save();
    } catch (error) {
      throw new NotFoundException();
    }
  }
  updateCategory() {}
  deleteCategory() {}
}
