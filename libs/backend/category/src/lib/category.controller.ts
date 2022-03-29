import { JwtAuthGuard } from '@jafar-tech/backend/auth';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  getCategories(
    @Request() request,
    @Body() createCategoryData: CreateCategoryDto
  ) {
    console.log(request.user);
    let companyId = request.user.companyId;

    return this.categoryService.addCategory(companyId, createCategoryData);
  }
}
