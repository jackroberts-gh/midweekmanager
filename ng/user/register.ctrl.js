(function() {
  'use strict';
  angular.module('app')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', 'UserSvc'];

  function RegisterCtrl($scope, UserSvc) {

    var vm = this;
    vm.register = register;

    function register(username, email, firstname, surname, dateofbirth, mobilenumber, password) {
      UserSvc.register(username, email, firstname, surname, dateofbirth, mobilenumber, password)
        .then(function(response) {
          $scope.$emit('login', response.data)
          window.location.href = '/#/';
        })
        .catch(function(err) {
          $("#registererror").removeClass('hidden');
        })
    }
  }
})();

/*$scope.checkUsername = function() {
scope.username = $scope.email.substr(0, $scope.email.indexOf('@'))
UserSvc.checkUsername($scope.email.substr(0, $scope.email.indexOf('@')))
.success(function(username) {
$scope.username = $scope.email.substr(0, $scope.email.indexOf('@'))
})
.catch(function() {
})
}*/