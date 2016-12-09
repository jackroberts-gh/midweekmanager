(function() {
  'use strict';
  angular.module('app')
    .controller('JoinTeamCtrl', JoinTeamCtrl);

  JoinTeamCtrl.$inject = ['$scope', 'TeamService', 'PlayerService'];

  function JoinTeamCtrl($scope, TeamService, PlayerService) {

    var vm = this;
    vm.joinTeam = joinTeam;

    function joinTeam(team_id, position) {
      TeamService.fetchOne(team_id)
        .success(function(team) {
          PlayerService.create($scope.app.currentUser._id, position, $scope.app.currentUser.firstname, $scope.app.currentUser.surname)
            .success(function(player) {
              TeamService.assignPlayerToTeam(team_id, player._id)
                .success(function() {
                  $("#joinTeamModal").modal('hide');
                })
            })
        })
        .error(function(err) {
          $("#jointeamerror").removeClass('hidden');
        })
    }
  }
})();