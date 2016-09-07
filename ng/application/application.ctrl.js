angular.module('app')
.controller('ApplicationCtrl', function($scope, $http, $location, UserSvc) {
 if (window.localStorage.getItem("midweekmanagertoken") != null) {
      $http.defaults.headers.common['X-Auth'] = window.localStorage.getItem("midweekmanagertoken")
      UserSvc.getUser().success(function(user) {
        $scope.currentUser = user
      })
  }
  $scope.$on('login', function(_, user) {
    $scope.currentUser = user;
  })
  $scope.$on('logout', function(_, user) {
    $scope.currentUser = '';
  })
})
