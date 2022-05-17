import { IfStmt } from '@angular/compiler';
import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Task } from '../..//Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();
  text! :string;
  day! :string;
  reminder: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
   if(!this.text)
   {
     alert("please add text");
     return;
   }

   const newTask = {
     "text":this.text,
     "day":this.day,
     "reminder":this.reminder
   }

  //call add task
  this.onAddTask.emit(newTask);

  this.text = '';
  this.day = '';
  this.reminder = false;

  }


}
