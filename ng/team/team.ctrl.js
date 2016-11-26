angular.module('app')
.controller('TeamCtrl', TeamCtrl);

TeamCtrl.$inject = ['$scope', '$location', 'TeamService', 'PlayerService'];

function TeamCtrl($scope, $location, TeamService, PlayerService) {

  var vm = this;
  vm.players = [];
  vm.teamsPlayedFor = [];

  vm.showTeam = showTeam;
  vm.populatePlayers = populatePlayers;

  activate();

  function activate() {
    PlayerService.fetchMyPlayers($scope.app.currentUser._id)
    .success(function(players) {
      angular.forEach(players, function(player){
        vm.players.push(player._id);
      })
      TeamService.fetchMyTeams(vm.players)
      .success(function(teams) {
        if (teams.length === 1) {
          $location.path('/teams/' + teams[0]._id);
        }
        else {
          vm.teamsPlayedFor = teams;
        }
      })
    })
  }

  function populatePlayers(players) {
    //move angular for each to here once all code is done.
  }

  function showTeam(team) {
    $location.path('/teams/' + team._id);
  }
}
