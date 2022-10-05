import { TODO_STATUS } from 'src/common/constant/enum';
import { ITodo } from './interface/todo.service.interface';

export const data: ITodo[] = [
  {
    id: 1,
    title: 'eat',
    status: TODO_STATUS.PENDING,
  },
  {
    id: 2,
    title: 'read a book',
    status: TODO_STATUS.PENDING,
  },
];
