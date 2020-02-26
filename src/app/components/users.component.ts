import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  template: `
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users; index as index">
          <td>{{ user.name }}</td>
          <td>{{ user.userName }}</td>
          <td>
            <button (click)="onEditUser(index)">Edit</button>
            <button (click)="onDeleteUser(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class UsersComponent implements OnInit {
  users;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  onEditUser(index) {}

  onDeleteUser(index) {
    this.users = this.usersService.deleteUser(index);
  }
}
