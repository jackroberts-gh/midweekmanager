angular.module('app')
.controller('CreateTeamCtrl', CreateTeamCtrl);

// May need userservice but currently unlikely
CreateTeamCtrl.$inject = ['$scope', 'TeamService', 'PlayerService'];

function CreateTeamCtrl($scope, TeamService, PlayerService) {

  var vm = this;
  vm.registerTeam = registerTeam;

  function registerTeam(teamname, teamtype, dayofplay, position) {
    TeamService.create(teamname, teamtype, dayofplay, $scope.app.currentUser._id)
    .success(function (team) {
      PlayerService.create($scope.app.currentUser._id, position, $scope.app.currentUser.firstname, $scope.app.currentUser.surname)
      .success(function (player) {
        TeamService.assignPlayerToTeam(team._id, player._id)
        .success(function() {
            window.location.href = '/#/';
        })
      })
    })
  }
}
