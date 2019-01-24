import { Injectable, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Task } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  @Output() select = new EventEmitter<Task>();
  toDoList: Task[];
  id:number = 0;

  constructor() {
    this.toDoList = []
  }

  addTask(task: Task) {
    task.id = ++this.id;
    this.toDoList.push(task);
    
  }

  showList(){
    return this.toDoList
  }

}
