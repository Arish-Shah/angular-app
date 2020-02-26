import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [
    { name: 'Luke Skywalker', userName: 'lukeSky' },
    { name: 'Darth Vader', userName: 'Darthy' },
    { name: 'Han Solo', userName: 'hSolo' }
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }

  deleteUser(index) {
    const updatedUsers = [...this.users];
    updatedUsers.splice(index, 1);
    this.users = updatedUsers;
    return this.users;
  }

  addUser(user) {
    const updatedUsers = [...this.users];
    updatedUsers.push(user);
    this.users = updatedUsers;
    return this.users;
  }
}
