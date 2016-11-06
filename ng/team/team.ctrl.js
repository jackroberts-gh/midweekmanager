angular.module('app')
.controller('TeamCtrl', function ($scope, $location, UserSvc, TeamService, PlayerService) {

  $scope.players = [];
  $scope.teamsPlayedFor = [];

  PlayerService.fetchMyPlayers($scope.currentUser._id).success(function(players) {

    angular.forEach(players, function(player){
      $scope.players.push(player._id);
    })
    TeamService.fetchMyTeams($scope.players).success(function(teams) {
      if (teams.length === 1) {
        $location.path('/teams/' + teams[0]._id);
      }
      else {
        $scope.teamsPlayedFor = teams;
      }})
    })

    $scope.showTeam = function(team) {
      $location.path('/teams/' + team._id);
    };

  })
