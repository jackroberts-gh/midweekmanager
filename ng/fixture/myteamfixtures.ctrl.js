angular.module('app')
.controller('MyFixturesCtrl', MyFixturesCtrl);

MyFixturesCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

function MyFixturesCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {
  var vm = this;

  vm.team = {};
  vm.fixture = {};
  vm.user = {};

  vm.createSelectedPlayer = createSelectedPlayer;
  vm.assignMom = assignMom;

  TeamService.fetchOne($routeParams.team_id).success(function(team) {
    vm.team = team;
  })

  FixtureService.fetchFixture($routeParams.fixture_id).success(function(fixture) {
    vm.fixture = fixture;
  })

  UserSvc.getUser().success(function(user) {
    vm.user = user;
  })

  function createSelectedPlayer(player) {
    if(vm.user._id === player._userid) {
      var player = {
        _playerid: player._id,
        goals: player.goals,
        mom: player.mom,
        in: player.in,
      }
    }
  }

  function assignMom(player) {
    angular.forEach(vm.team.players, function(item) {
      item.mom = false;
    })
    player.mom = true;
  }
}
