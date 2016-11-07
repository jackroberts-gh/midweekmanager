angular.module('app')
.controller('MyFixturesCtrl', MyFixturesCtrl);

MyFixturesCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

function MyFixturesCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {
  var vm = this;

  vm.team = TeamService.currentTeam;
  vm.fixture = {};
  vm.user = {};
  vm.print = createSelectedPlayer;

  FixtureService.fetchFixture($routeParams.fixture_id).success(function(fixture) {
    vm.fixture = fixture;
  })

  UserSvc.getUser().success(function(user) {
    vm.user = user;
  })

  function print(player) {
    if(vm.user._id === player._userid) {
      // Submit updated model of  to fixture service
    }
  }

  function createSelectedPlayer(player) {
    if(vm.user._id === player._userid) {
      var player = {
        _playerid: player._id,
        goals: player.goals,
        mom: player.mom,
        in: player.in,
      };

      console.dir(player);
    }
  }

}
