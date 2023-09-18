import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../interfaces/task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() taskItem!: Task;
  @Output() recivedDeleteID = new EventEmitter<number>();
  handleDelete(id: number) {
    this.recivedDeleteID.emit(id);
  }
  handleCompleted() {
    this.taskItem.isDone = !this.taskItem.isDone;
  }
}
