
// export interface Task {
//   title: string;
//   description: string;
//   urgent: boolean;
//   state: 'To Do' | 'In Progress' | 'Done';
// }

export interface Task{
  id: number;
  title: string;
  description: string;
  urgent: boolean;
  state: 'To Do'| 'In Progress' | 'On Hold' | 'Done';

  // constructor(values: Object = {}){
  //   Object.assign(this, values);
  // }
}  