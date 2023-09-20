import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() userData!: User;
  @Input() userNameActiveFromParent!: string;
  @Output() userNameSending = new EventEmitter();

  handlActive(username: string) {
    this.userNameSending.emit(username);
  }
}
