import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoDTO, UpdateTodoDTO } from '../dto/todo.dto';
import { TodoService } from '../providers/todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getTodoList() {
    return this.todoService.getList();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createtTodo(@Body() body: CreateTodoDTO) {
    return this.todoService.createTodo(body);
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string) {
    return this.todoService.findById(id);
  }

  @Put('/:id')
  updateTodoById(@Param('id') id: string, @Body() body: UpdateTodoDTO) {
    return this.todoService.updateById(id, body);
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    return this.todoService.removeById(id);
  }
}
