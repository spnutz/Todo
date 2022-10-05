import { IsEnum, IsString } from 'class-validator';
import { TODO_STATUS } from 'src/common/constant/enum';

export class TodoReseponseDTO {
  id: number;
  title: string;
  status: TODO_STATUS;
}

export class CreateTodoDTO {
  @IsString()
  title: string;
}

export class UpdateTodoDTO {
  @IsString()
  title: string;
  @IsEnum(TODO_STATUS)
  status: TODO_STATUS;
}
