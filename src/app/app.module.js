const app = angular.module('app', []);

app.controller('mainController', function($scope) {
  $scope.greeting = {
    title: 'World'
  };
});
