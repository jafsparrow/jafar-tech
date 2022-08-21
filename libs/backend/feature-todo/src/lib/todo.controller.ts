import { TodoService } from '@jafar-tech/backend/data-access-todo';
import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getTodos() {
    return this.todoService;
  }
}
