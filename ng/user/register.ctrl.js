angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {

  $scope.register = function (username, email, firstname, surname, dateofbirth, mobilenumber, password) {
    UserSvc.register(username, email, firstname, surname, dateofbirth, mobilenumber, password)
    .then(function(response) {
      $scope.$emit('login', response.data)
      window.location.href = '/#/';
      })
    }

    $scope.checkUsername = function() {
      //$scope.username = $scope.email.substr(0, $scope.email.indexOf('@'))
      //UserSvc.checkUsername($scope.email.substr(0, $scope.email.indexOf('@')))
    //  .success(function(username) {
    //    $scope.username = $scope.email.substr(0, $scope.email.indexOf('@'))
    //  })
    //  .fail(function() {

    //  })
      //
    }

})
