angular.module('app')
.controller('CreateTeamCtrl', function ($scope, UserSvc, TeamService, PlayerService) {

  $scope.registerTeam = function (teamname, teamtype, dayofplay, position) {

    TeamService.create(teamname, teamtype, dayofplay, $scope.currentUser._id)
    .success(function (team) {
      PlayerService.create($scope.currentUser._id, position, $scope.currentUser.firstname, $scope.currentUser.surname)
      .success(function (player) {
        TeamService.assignPlayerToTeam(team._id, player._id)
        .success(function() {
            window.location.href = '/#/';
        })
      })
    })
    //  window.location.href = '/#/';
  }
})
