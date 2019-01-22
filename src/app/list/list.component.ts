import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tasks } from '../models/models';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  @Output() select = new EventEmitter<Tasks>();


  showMore(){
    var x = document.getElementById("full-task");
    if(x.style.display === "none"){
      x.style.display = "block";
    }
    else{
      x.style.display = "none";
    }
  }

  toDoList: Tasks[];
  addTask(newTask: string) {
    if (newTask) {
      this.toDoList.push();
    }
  }
  constructor() {
    // this.list = [
    //   {title: 'Title 1', state: 'To Do', description: 'description 1', urgent: true },
    //   {title: 'Title 2', state: 'Done', description: 'description 2', urgent: true },
    //   {title: 'Title 3', state: 'In Progress', description: 'description 3', urgent: false },
    //   {title: 'Title 4', state: 'To Do', description: 'description 4', urgent: true },
    // ];
    this.toDoList = [
      { id: 1, title: 'task1', description: 'do this m8', urgent: false, state: 'To Do' }
    ]
  }

  ngOnInit() {
  }

}



