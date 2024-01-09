import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Task } from '../Entity/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8080/api/v1/tasks";

  constructor(private http: HttpClient) { }
  task1 = new Task(1, '2022-01-01', new Date(), 'Task 1', 'Description 1', []);
  task2 = new Task(2, '2022-01-02', new Date(), 'Task 2', 'Description 2', []);
  task3 = new Task(3, '2022-01-03', new Date(), 'Task 3', 'Description 3', []);

  tasks:Task[] = [this.task1, this.task2, this.task3];

  getTasks(): Observable<Task[]>{
/*
    return this.http.get<Task[]>(`${this.baseUrl}`);
*/
    return of(this.tasks);
  }
  create(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}`, task);
  }

  updateCompetition(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${task.id}`, task);
  }
  deleteCompetition(taskId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${taskId}`);
  }


}
