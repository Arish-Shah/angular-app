import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <ng-template ngIf="done">
      <li class="list-group-item">
        <del>
          {{ text }}
        </del>
      </li>
    </ng-template>
    <ng-template ngIf="!done">
      <li class="list-group-item">
        {{ text }}
      </li>
    </ng-template>
  `
})
export class TodoComponent implements OnInit {
  @Input('text') text: string;
  @Input('done') done: boolean;

  constructor() {}

  ngOnInit() {}
}
