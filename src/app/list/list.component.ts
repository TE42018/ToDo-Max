import { Component, EventEmitter, Input, OnInit, Output, Injectable } from '@angular/core';
import { Task } from '../models/models';
import { Title } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  @Output() select = new EventEmitter<Task>();
  
  tasks : Task[];  

  constructor(taskService: TasksService) {
    this.tasks = taskService.showList();
  }
  
  showMore(){
    var element = document.getElementById("full-task");
    if(element.style.display === "none"){
      element.style.display = "block";
    }
    else{
      element.style.display = "none";
    }
  }

  ngOnInit() {
  }

}



