angular.module('app')
.controller('TeamCtrl', function ($scope, $location, UserSvc, TeamService, PlayerService) {

    PlayerService.fetchMyPlayers($scope.currentUser._id)
    .success(function(players) {
      $scope.players = [];
      angular.forEach(players, function(item){
                   $scope.players.push(item._id);
               })
        TeamService.fetchMyTeams($scope.players)
        .success(function(teams) {
          if (teams.length === 1) {
            $location.path('/teams/' + teams[0]._id);
          }
          else {
            $scope.teamsPlayedFor = teams;
            //console.log('teams', teams);
          }})
      })

    $scope.showTeam = function(team) {
      $location.path('/teams/' + team._id);
    };

})
