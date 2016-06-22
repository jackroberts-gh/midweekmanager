angular.module('app')
.controller('TeamCtrl', function ($scope, $location, UserSvc, TeamService) {
  TeamService.fetchMyTeams($scope.currentUser._id).success(function(teams) {
      $scope.teams = teams;
    })

  $scope.showTeam = function(team) {
    $location.path('#/teams/' + team._id);
  };

})
