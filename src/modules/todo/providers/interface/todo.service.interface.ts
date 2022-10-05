import { TODO_STATUS } from 'src/common/constant/enum';

export interface ITodo {
  id: number;
  title: string;
  status: TODO_STATUS;
}
