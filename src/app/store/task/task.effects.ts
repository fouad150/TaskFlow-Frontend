import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {of, tap} from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import * as TaskActions from '../task/task.actions';
import {TaskService} from "../../task/task.service";
import {Store} from "@ngrx/store";

@Injectable()
export class TaskEffects {

  /*loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.loadTasks),
    mergeMap(() => this.taskService.getTasks()
      .pipe(
        tap(tasks => {this.store.dispatch(TaskActions.loadTasks()),console.log(tasks)})
      )
    )
  ), { dispatch: false });*/

  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.loadTasks),
  tap(() => console.log('Effect: loadTasks executed')),
  mergeMap(() => this.taskService.getTasks()
      .pipe(
        map(tasks => TaskActions.loadTasksSuccess({ tasks })),
        catchError(error => of(TaskActions.loadTasksFailure({ error })))
      )
    )
  ));

  // ... other task-related effects

  constructor(
    private actions$: Actions,
    private taskService: TaskService,
  ) {}
}
