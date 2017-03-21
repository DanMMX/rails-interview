angular.module('interviewApp', ['ui.router', 'templates'])
.controller('MainCtrl', [function () {
  this.test = 'Hello world!';
  this.students = [{
    name: 'Dan',
    movie: 'bla'
  }, {
    name: 'Dan',
    movie: 'bla'
  }, {
    name: 'Dan',
    movie: 'bla'
  }, {
    name: 'Dan',
    movie: 'bla'
  }];
}])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '_home.html',
      controller: 'MainCtrl',
      controllerAs: 'ctrl'
    });

  $urlRouterProvider.otherwise('/');
}]);
