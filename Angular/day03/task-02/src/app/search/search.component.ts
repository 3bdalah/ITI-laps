import { Component } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query: string = '';
  newUsers: Array<any> = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getJsonData().subscribe((res: any) => {
      this.newUsers = res;
    });
  }

  displayUsers(): void {
    this.newUsers = this.newUsers.filter((user) =>
      user.username.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  resetSearch(): void {
    this.query = '';
    this.dataService.getJsonData().subscribe((res: any) => {
      this.newUsers = res;
    });
  }
}
