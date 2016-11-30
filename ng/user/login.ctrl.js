angular.module('app')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', 'UserSvc'];

function LoginCtrl($scope, UserSvc) {

  var vm = this;
  vm.login = login;


  function login(username, password) {
    UserSvc.login(username, password)
      .then(function (response) {
        $scope.$emit('login', response.data)
        window.location.href = '/#/';
      })
      .catch(function(response) {
        $("#loginerror").removeClass('hidden');
      })
    }
}
