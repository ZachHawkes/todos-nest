import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { TodoDto } from './dtos/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get(':id')
  public async getTodo(@Param(':id') id: number): Promise<Todo> {
    return this.todoService.getTodo({ id });
  }

  @Post()
  public async createTodo(@Body() body: TodoDto): Promise<Todo> {
    const { title, description, assigneeEmail, complete } = body;
    return this.todoService.createTodo({
      title,
      description,
      complete,
      assignee: {
        connect: { email: assigneeEmail },
      },
    });
  }
}
