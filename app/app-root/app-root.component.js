angular.module('app').component('appRoot', {
  template: `
    <form ng-submit="$ctrl.handleFormSubmit()">
      <input type="text" ng-model="$ctrl.newTodo" autofocus />
      <input type="submit" value="Add" />
    </form>
    <ul>
      <li ng-repeat="todo in $ctrl.todos">{{ todo }}</li>
    </ul>
  `,
  controller: function() {
    this.newTodo = '';
    this.todos = ['hello', 'hi'];
    this.handleFormSubmit = function() {
      this.todos.unshift(this.newTodo);
      this.newTodo = '';
    };
  }
});
