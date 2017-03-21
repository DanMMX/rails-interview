angular.module('interviewApp')
.factory('Student', function ($resource) {
  return $resource('/students', {}, {
    query: {
      method: 'GET',
      isArray: true,
      headers: {
        'Accept': 'application/json'
      }
    }
  });
});
