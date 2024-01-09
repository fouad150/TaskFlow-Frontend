import { createReducer, on } from '@ngrx/store';
import { Task } from 'src/app/Entity/Task';
import * as TaskActions from './task.actions';

export const initialState: Task[] = [];

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => tasks),
);
