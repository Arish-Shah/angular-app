import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="display: inline-block; margin: 0 auto;">
      <h1>{{ title }}</h1>
    </div>
  `
})
export class AppComponent {
  title = 'ng';
}
