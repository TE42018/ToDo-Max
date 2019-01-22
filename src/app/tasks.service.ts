import { Injectable, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Task } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  @Output() select = new EventEmitter<Task>();
  toDoList: Task[];
  id:number = 0;

  addTask(newTask: Task) {
    newTask.id = ++this.id; 
      this.toDoList.push(newTask);
      console.log(this.toDoList)
  }

  constructor() {
    this.toDoList = [
      // { id: 1, title: 'task1', description: 'do this m8', urgent: false, state: 'To Do' }
    ]
   }
  
  fingrej(){
    return this.toDoList
  }

}
