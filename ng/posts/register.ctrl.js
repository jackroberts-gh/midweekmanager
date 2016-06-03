angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {
  $scope.register = function (username, firstname, surname, dateofbirth, password) {
    UserSvc.register(username, firstname, surname, dateofbirth, password)
    .then(function(response) {
      $scope.$emit('register', response.data)
      window.location.href = '/#/';
      })
    }
})
