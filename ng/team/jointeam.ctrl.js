angular.module('app')
.controller('JoinTeamCtrl', function ($scope, TeamService, PlayerService) {

  $scope.joinTeam = function(team_id, position) {
    TeamService.fetchOne(team_id)
    .success(function(team) {
      PlayerService.create($scope.currentUser._id, position, $scope.currentUser.firstname, $scope.currentUser.surname)
      .success(function (player) {
        TeamService.assignPlayerToTeam(team_id, player._id)
        .success(function() {
          $("#joinTeamModal").modal('hide');
        })
      })
    })
    .error(function(err) {
        $("#jointeamerror").removeClass('hidden');
      })
    }
})
