import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-4">
      <ul *ngFor="let todo of todos" class="list-group">
        <app-todo [text]="todo.text" [done]="todo.done"></app-todo>
      </ul>
    </div>
  `
})
export class AppComponent {
  todos = [
    { id: 0, text: 'First Thing', done: false },
    { id: 1, text: 'Second Thing', done: false }
  ];
}
