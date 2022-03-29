import { BackendAuthModule } from '@jafar-tech/backend/auth';
import { BackendOrganisationModule } from '@jafar-tech/backend/organisation';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';
import { Category, CategorySchema } from './models/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Category.name,
        schema: CategorySchema,
      },
    ]),
    forwardRef(() => BackendOrganisationModule),
    BackendAuthModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
  exports: [],
})
export class BackendCategoryModule {}
