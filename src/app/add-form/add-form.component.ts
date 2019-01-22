import { Component, OnInit } from '@angular/core';
import {Task} from '../models/models';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  taskService: TasksService;
  constructor(taskService: TasksService) { 
    this.taskService = taskService;
  }
  
  ngOnInit() {
  }

  onSubmit(title : string){
    this.taskService.addTask({title:title});
  }

  }

