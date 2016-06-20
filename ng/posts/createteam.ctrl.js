angular.module('app')
.controller('CreateTeamCtrl', function ($scope, UserSvc, TeamService) {
  $scope.registerTeam = function (teamname, teamtype, dayofplay) {
    TeamService.create(teamname, teamtype, dayofplay, $scope.currentUser._id)
    }
})
