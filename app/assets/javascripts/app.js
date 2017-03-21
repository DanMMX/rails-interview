angular.module('interviewApp', [])
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
}]);
