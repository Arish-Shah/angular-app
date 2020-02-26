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
        <tr *ngFor="let user of users">
          <td>{{ user.name }}</td>
          <td>{{ user.userName }}</td>
          <td>
            <button (click)="onEditUser(user.id)">Edit</button>
            <button (click)="onDeleteUser(user.id)">Delete</button>
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

  onEditUser(id) {
    console.log(id);
  }

  onDeleteUser(id) {
    console.log(id);
  }
}
