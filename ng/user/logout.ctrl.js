angular.module('app')
.controller('LogoutCtrl', function ($scope, UserSvc) {
      UserSvc.logout()
      $scope.$emit('logout')
      window.location.href = '/#/login'
  }
)
