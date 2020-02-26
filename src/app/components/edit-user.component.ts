import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  template: `
    <form>
      <input type="text" />
    </form>
  `
})
export class EditUserComponent implements OnInit {
  editUser;
  newUser;
  constructor() {}

  ngOnInit(): void {}
}
