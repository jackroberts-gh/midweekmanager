angular.module('app')
.controller('LogoutCtrl', LogoutCtrl);

LogoutCtrl.$inject = ['$scope', 'UserSvc'];

function LogoutCtrl($scope, UserSvc) {

  activate();

  function activate() {
    UserSvc.logout()
    $scope.$emit('logout')
    window.location.href = '/'
  }
}
