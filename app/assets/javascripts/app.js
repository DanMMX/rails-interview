angular.module('interviewApp', ['ui.router', 'templates', 'ngResource'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/_home.html',
      controller: 'HomeCtrl',
      controllerAs: 'home',
      resolve: {
        students: function (Student) {
          return Student.query();
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}]);
