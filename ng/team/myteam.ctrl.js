angular.module('app')
.controller('MyTeamCtrl', function ($scope, UserSvc, TeamService, $routeParams) {
  TeamService.fetchOne($routeParams.team_id).success(function(team) {
      $scope.team = team;

      /*angular.forEach($scope.team.fixtures, function(value, key) {
        value.date = value.date.
      });*/

    })




})
