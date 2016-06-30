angular.module('app')
.controller('MyTeamCtrl', function ($scope, UserSvc, TeamService, $routeParams) {
  $scope.Goalkeeper = 0;
  $scope.Defender = 0;
  $scope.Midfielder = 0;
  $scope.Forward = 0;

  TeamService.fetchOne($routeParams.team_id).success(function(team) {
      $scope.team = team;
    })

})
