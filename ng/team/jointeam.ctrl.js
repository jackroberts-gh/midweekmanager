angular.module('app')
.controller('JoinTeamCtrl', function ($scope, TeamService, PlayerService) {

  $scope.joinTeam = function(team_id, position) {
    PlayerService.create($scope.currentUser._id, position, $scope.currentUser.firstname, $scope.currentUser.surname)
    .success(function (player) {
      TeamService.assignPlayerToTeam(team_id, player._id)
      .success(function() {
        console.log('success');
        // indicate success to provide success toast/modal
      })
    })
  }

})
