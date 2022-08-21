import { BackendDataAccessTodoModule } from '@jafar-tech/backend/data-access-todo';
import { Module } from '@nestjs/common';

@Module({
  imports: [BackendDataAccessTodoModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class BackendFeatureTodoModule {}
