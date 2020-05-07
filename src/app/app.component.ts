import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  newTodo = '';
  todos = [{ text: 'A first item' }];

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.newTodo.trim() !== '') {
      this.todos.unshift({ text: this.newTodo });
      this.newTodo = '';
    }
  }
}
