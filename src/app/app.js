const app = angular.module('app', []);

app.controller('AppController', function($scope) {
  $scope.message = 'Hello World!';
  $scope.names = ['Luke', 'Leia', 'Anakin', 'Yoda', 'Ben'];
});
