import { Component } from '@angular/core';
import * as usersData from '../../assets/users.json';
import { User } from '../interfaces/user';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  newUsers: Array<User> = usersData;
  userNameActive: string = '';

  receiveDataUser(userActiveClicked: string) {
    this.userNameActive = userActiveClicked;
  }
}
