angular.module('app')
.controller('TeamCtrl', function ($scope, UserSvc, TeamService) {
  $scope.registerTeam = function (teamname, teamtype, dayofplay) {
    TeamService.create(teamname, teamtype, dayofplay, $scope.currentUser._id)
    }

})
