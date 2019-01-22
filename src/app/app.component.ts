import { Component,  OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  // @Output() select = new EventEmitter<Tasks>();

  title = 'What Todo';
  yee = 'hej';
  add: boolean;

  // nice = ['hej', 'hej2', 'hej3','hejkuk'];

  // toDoList: Tasks[];
  // addTask(newTask: string) {
  //   if (newTask) {
  //     this.toDoList.push({ id: 2, title: newTask, description: newTask, urgent: false, state: 'To Do' });
  //   }
  // }
  constructor() {
    // this.list = [
    //   {title: 'Title 1', state: 'To Do', description: 'description 1', urgent: true },
    //   {title: 'Title 2', state: 'Done', description: 'description 2', urgent: true },
    //   {title: 'Title 3', state: 'In Progress', description: 'description 3', urgent: false },
    //   {title: 'Title 4', state: 'To Do', description: 'description 4', urgent: true },
    // ];
    // this.toDoList = [
    //   { id: 1, title: 'task1', description: 'do this m8', urgent: false, state: 'To Do' }
    // ]
  }


  onAdd() {
    this.add = true;
  }
}

