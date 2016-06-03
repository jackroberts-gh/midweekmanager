angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {
  $scope.register = function (username, email, firstname, surname, dateofbirth, password) {
    UserSvc.register(username, email, firstname, surname, dateofbirth, password)
    .then(function(response) {
      $scope.$emit('register', response.data)
      window.location.href = '/#/';
      })
    }
    $scope.suggestUsername = function() {
      $scope.username = $scope.email.substr(0, $scope.email.indexOf('@'))
    }
})
