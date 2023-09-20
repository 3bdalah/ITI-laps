import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() userData!: User;
  @Output() userNameSend = new EventEmitter<string>();
  handlActive(username: string) {
    console.log('test Clicked', username);
    this.userNameSend.emit(username);
  }
}
