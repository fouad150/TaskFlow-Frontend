import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Task } from 'src/app/Entity/Task';
import { AppState } from '../app.state';

export const selectTaskState = createFeatureSelector<AppState, Task[]>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  tasks => tasks
)

