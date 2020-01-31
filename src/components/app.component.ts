import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{ text }}</h1>
    </div>
  `
})
export class AppComponent {
  text: string = 'Hello World from Angular! 📦 🚀';

  constructor() {}
}
