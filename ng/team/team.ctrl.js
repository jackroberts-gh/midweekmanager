angular.module('app')
.controller('TeamCtrl', function ($scope, $location, UserSvc, TeamService, PlayerService) {

  // Should be able to get rid of this and just use the below method to fetchMyTeams.
  // Need to create a player and add to the team upon creation of team.
  TeamService.fetchTeamsIManage($scope.currentUser._id).success(function(teams) {
      $scope.teamsManaged = teams;
      console.log('teams managed', teams);
    })

    PlayerService.fetchMyPlayers($scope.currentUser._id).success(function(players) {
      $scope.players = []
      angular.forEach(players, function(item){
                   $scope.players.push(item._id);
               })
        TeamService.fetchMyTeams($scope.players).success(function(teams) {
            $scope.teamsPlayedFor = teams;
            console.log('teams', teams);
          })
      })

  $scope.showTeam = function(team) {
    $location.path('/teams/' + team._id);
  };

})
