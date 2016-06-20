angular.module('app')
.controller('TeamCtrl', function ($scope, UserSvc, TeamService) {
  TeamService.fetchMyTeams($scope.currentUser._id).success(function(teams) {
      console.log($scope.currentUser._id);
      $scope.teams = teams;
    })
})
