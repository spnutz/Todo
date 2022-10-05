import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TODO_STATUS } from 'src/common/constant/enum';
import { CreateTodoDTO, UpdateTodoDTO } from '../dto/todo.dto';
import { ITodo } from './interface/todo.service.interface';
import { data } from './todo-mock';

@Injectable()
export class TodoService {
  private data: ITodo[] = [];
  constructor() {
    this.data = data;
  }
  getList(): ITodo[] {
    return this.data;
  }

  findById(id: string): ITodo {
    const result = this.data.filter((i) => i.id === parseInt(id, 10));
    if (result.length > 0) return result[0];
    throw new HttpException(`id: ${id} not found`, HttpStatus.NOT_FOUND);
  }

  updateById(id: string, body: UpdateTodoDTO): ITodo[] {
    const result = this.data.filter((i) => i.id === parseInt(id, 10));
    if (result.length === 0) {
      throw new HttpException(`id: ${id} not found`, HttpStatus.NOT_FOUND);
    }
    result[0].title = body.title;
    result[0].status = body.status;
    return this.data.map((i) =>
      i.id === parseInt(id, 10) ? (i = result[0]) : i,
    );
  }

  createTodo(body: CreateTodoDTO): any {
    const newData: ITodo = {
      id: this.data.length + 1,
      title: body.title,
      status: TODO_STATUS.PENDING,
    };
    this.data.push(newData);
    return newData;
  }

  removeById(id: string): ITodo[] {
    const result = this.data.filter((i) => i.id === parseInt(id, 10));
    if (result.length === 0) {
      throw new HttpException(`id: ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return (this.data = this.data.filter((i) => i.id !== parseInt(id, 10)));
  }
}
