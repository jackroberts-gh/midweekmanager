angular.module('app')
.controller('CreateTeamCtrl', function ($scope, UserSvc, TeamService, PlayerService) {

  $scope.registerTeam = function (teamname, teamtype, dayofplay, position) {

    TeamService.create(teamname, teamtype, dayofplay, $scope.currentUser._id)
    .success(function (team) {
      PlayerService.create($scope.currentUser._id, position, $scope.currentUser.firstname, $scope.currentUser.surname)
      .success(function (player) {
        console.log("assigning player to team " + team._id);
        TeamService.assignPlayerToTeam(team._id, player._id)
        console.log("afterwards?");
      })
    })
      window.location.href = '/#/';
  }
})
