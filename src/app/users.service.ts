import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
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
  }
}

interface User {
  name: string;
  userName: string;
}
