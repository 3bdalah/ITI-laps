import { Component } from '@angular/core';
import { Task } from '../interfaces/task';
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent {
  listTask: Array<Task> = [];
  newListTask: Array<Task> = [];
  counter: number = 0;
  handleRandomID(): number {
    return Math.floor(Math.random() * 20000000);
  }

  recevieValue(val: any) {
    console.log('value from task single', val);
    // this.counter = this.counter+1;
    const randomID = this.handleRandomID();
    this.listTask.push({
      id: randomID,
      content: val,
      isDone: false,
    });
    console.log('list tasks', this.listTask);
  }

  receivedIDTask(id: number) {
    this.listTask = this.listTask.filter((task) => task.id !== id);
  }
}
