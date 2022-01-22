import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { TodoService } from './todo.service';
import { ITodo } from './types';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {};

    @Get(':id')
    public async getTodo(@Param(':id') id: string): Promise<Todo> {
        return this.todoService.getTodo({ id: Number(id) });
    }

    @Post()
    public async createTodo(@Body() body: ITodo): Promise<Todo> {
        const { title, description, assigneeEmail, complete } = body;
        return this.todoService.createTodo({
            title,
            description,
            complete,
            assignee: {
                connect: { email: assigneeEmail }
            }
        });
    }
}
