import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './models/category.schema';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(Category.name)
    private readonly category: Model<Category>
  ) {}
  createCategory(categoryDto: CreateCategoryDto) {
    const newCategory = new this.category(categoryDto);
    return newCategory.save();
  }
  updateCategory() {}
  deleteCategory() {}
}
