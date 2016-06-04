angular.module('app')
.controller('LogoutCtrl', function ($scope, UserSvc) {
    console.log('inside controller now?')
      UserSvc.logout()
      $scope.$emit('logout')
      window.location.href = '/#/login'
  }
)
