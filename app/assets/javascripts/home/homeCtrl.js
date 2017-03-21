angular.module('interviewApp')
.controller('HomeCtrl', ['students', function (students) {
  this.test = 'Hello world!';
  this.sortType = 'name';
  this.sortReverse = false;
  this.students = students;
  this.setSort = function (type) {
    if (type === this.sortType) {
      this.sortReverse = false;
    } else {
      this.sortReverse = !this.sortReverse;
    }

    this.sortType = type;
  };

  this.isSortedBy = function (type) {
    return this.sortType === type;
  };
}])
