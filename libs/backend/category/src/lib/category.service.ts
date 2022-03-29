import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  addCategory(companyId: string, data: CreateCategoryDto) {
    return this.categoryRepository.createCategory(companyId, data);
  }
}
