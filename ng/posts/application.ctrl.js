angular.module('app')
.controller('ApplicationCtrl', function($scope, $http, $location, UserSvc) {
 if (window.localStorage.getItem("token") != null) {
      $http.defaults.headers.common['X-Auth'] = window.localStorage.getItem("token")
      UserSvc.getUser().success(function(user) {
        $scope.currentUser = user
      })
  }
  $scope.$on('login', function(_, user) {
    $scope.currentUser = user;
  })

  $scope.$on('register', function(_, user) {
    $scope.currentUser = user;
  })

    $scope.logout = function () {
      $scope.currentUser = ''
      window.localStorage.removeItem("token")
      window.location.reload(true)
    }
})
