import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="row">
      <app-edit-user></app-edit-user>
      <app-users></app-users>
    </div>
  `
})
export class AppComponent {}
