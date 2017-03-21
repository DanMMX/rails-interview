angular.module('interviewApp')
.controller('HomeCtrl', ['students', function (students) {
  this.test = 'Hello world!';
  this.students = students;
}])
