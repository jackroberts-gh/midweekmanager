angular.module('app')
.controller('ApplicationCtrl', function($scope, $http, UserSvc) {
 if (window.localStorage.getItem("token") != null) {
      $http.defaults.headers.common['X-Auth'] = window.localStorage.getItem("token")
      UserSvc.getUser().success(function(user) {
        $scope.currentUser = user
      })
  }
  $scope.$on('login', function(_, user) {
    $scope.currentUser = user;
  })
})
