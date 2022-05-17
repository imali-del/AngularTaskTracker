import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
// import { TASKS } from '../../mock-task';
import {TaskService} from '../../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  tasks :Task[] = [];
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    //this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  toggleReminder(task:Task){
    //toggleTask
    task.reminder = !task.reminder;
    this.taskService.updateRemiderToggle(task).subscribe();
  }
  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
