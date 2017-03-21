angular.module('interviewApp')
.controller('HomeCtrl', ['students', function (students) {
  var ctrl = this;

  ctrl.test = 'Hello world!';
  ctrl.sortType = 'name';
  ctrl.sortReverse = false;
  ctrl.isLoading = true;

  ctrl.setSort = function (type) {
    if (type === ctrl.sortType) {
      ctrl.sortReverse = false;
    } else {
      ctrl.sortReverse = !ctrl.sortReverse;
    }

    ctrl.sortType = type;
  };

  ctrl.isSortedBy = function (type) {
    return ctrl.sortType === type;
  };

  students.$promise.then(function (students) {
    console.log(students);
    ctrl.students = students;
    ctrl.isLoading = false;
  }, function (err) {
    console.log(err);
    ctrl.isLoading = false;
    ctrl.hasError = true;
  })
}])
