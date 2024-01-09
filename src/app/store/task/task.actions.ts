import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/Entity/Task';


export const loadTasks = createAction('[Tasks] Load Tasks');
export const loadTasksSuccess = createAction('[Tasks] Load Tasks Success', props<{ tasks: Task[] }>());
export const loadTasksFailure = createAction('[Tasks] Load Tasks Failure', props<{ error: any }>());
