import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodoService {
    constructor(private readonly prisma: PrismaService) {};

    public async getTodo(input: Prisma.TodoWhereUniqueInput): Promise<Todo> {
        return this.prisma.todo.findUnique({ where: input });
    }

    public async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
        return this.prisma.todo.create({ data });
    }

    public async findTodos(input: Prisma.TodoFindManyArgs): Promise<Todo[]> {
        return this.prisma.todo.findMany(input);
    }
}
