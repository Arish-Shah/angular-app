const app = angular.module('app', []);

app.controller('AppController', function($scope) {
  $scope.message = 'Hello World!';
  $scope.people = [
    { name: 'Luke Skywalker', side: 'Light' },
    { name: 'Anakin Skywalker', side: 'Dark' },
    { name: 'Obi-Wan Kenobi', side: 'Light' },
    { name: 'Ben Solo', side: 'Dark' }
  ];
});
