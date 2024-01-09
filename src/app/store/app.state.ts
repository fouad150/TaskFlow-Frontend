import { RouterReducerState } from '@ngrx/router-store';
import { Task } from '../Entity/Task';

export interface AppState {
  tasks: Task[];
  router: RouterReducerState;
}
