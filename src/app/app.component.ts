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

  
  constructor() {

  }


  onAdd() {
    this.add = true;
  }
}

