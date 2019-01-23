
export interface Task{
  id?: number;
  title?: string;
  description?: string;
  urgent?: boolean;
  state?: 'To Do'| 'In Progress' | 'On Hold' | 'Done';
}  