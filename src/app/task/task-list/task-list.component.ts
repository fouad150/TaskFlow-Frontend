import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {TaskService} from "../task.service";
import {selectAllTasks} from "../../store/task/task.selectors";
import { AppState } from '../../store/app.state';
import * as TaskActions from '../../store/task/task.actions';
import { Task } from 'src/app/Entity/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks$ = this.store.select(selectAllTasks);

  constructor(private store: Store<AppState>,private taskService:TaskService) {}

  ngOnInit() {
    console.log("the data exists");
    this.store.dispatch(TaskActions.loadTasks());
/*
    this.taskService.getTasks().subscribe((data:Task[])=>console.log(data));
*/
  }

}
