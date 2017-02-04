(function() {
  'use strict';
  angular.module('app')
    .controller('ApplicationCtrl', ApplicationCtrl);

  ApplicationCtrl.$inject = ['$scope', '$http', '$location', 'UserSvc'];

  function ApplicationCtrl($scope, $http, $location, UserSvc) {

    var app = this;

    activate();

    function activate() {
      if (window.localStorage.getItem("midweekmanagertoken") !== null) {
        UserSvc.getUser().success(function(user) {
          app.currentUser = user;
        })
      }
    }

    $scope.$on('login', function(_, user) {
      app.currentUser = user;
    })
    $scope.$on('logout', function(_, user) {
      app.currentUser = '';
    })
  }
})();