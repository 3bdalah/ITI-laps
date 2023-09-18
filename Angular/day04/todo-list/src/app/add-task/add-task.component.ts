import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() sendValueTask = new EventEmitter();

  valueInput: string = '';
  addNewTask(value: string) {
    console.log('Task added:', value);
    this.sendValueTask.emit(value);
    this.valueInput = '';
  }
}
