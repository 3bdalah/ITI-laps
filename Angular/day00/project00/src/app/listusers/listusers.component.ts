import { Component, DestroyRef, Input } from '@angular/core';
import { User } from '../interfaces/user';
// import mo from '../../assets/users.json';
import dataUsers from 'src/assets/users.json';
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css'],
})
export class ListusersComponent {
  usersList: User[] = dataUsers; // Error likely here
  // newUsers: any = this.usersList;
  newUsers: User[] = this.usersList;
  query: string = '';
  userNameActive: string = '';

  receivedUserNameFromCard(usernReceived: string) {
    this.userNameActive = usernReceived;
  }

  handleReset() {
    this.query = '';
    this.userNameActive = '';
    this.usersList = this.newUsers;
  }
  handleSearch(query: string) {
    console.log('user name qiery', this.query);
    this.usersList = this.newUsers.filter((userQuery) =>
      userQuery.username.includes(query.toLowerCase())
    );
  }
  // receiveDataUser(val: string) {
  //   console.log('val', val);
  // }
}
