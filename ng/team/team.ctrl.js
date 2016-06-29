angular.module('app')
.controller('TeamCtrl', function ($scope, $location, UserSvc, TeamService, PlayerService) {
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
