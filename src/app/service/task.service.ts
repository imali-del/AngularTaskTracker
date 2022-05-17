import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-task';
import { Observable, of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

const httpOptions = {
 headers : new HttpHeaders({
   'Content-Type':'application/json',
 }), 

};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private appUrl = "http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }

  // getTasks() : Task[] {
  //   return TASKS;

  // }
  
  // getTasks() : Observable<Task[]> {
  //   const tasks = of(TASKS);
  //   return tasks

  // }
  
   getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.appUrl);

  }
  deleteTask(task:Task): Observable<Task>{
    const url = `${this.appUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateRemiderToggle(task:Task) : Observable<Task>{
    const url = `${this.appUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);
  }

  addTask(task:Task) : Observable<Task>{
    return this.http.post<Task>(this.appUrl,task,httpOptions);
  }
}
