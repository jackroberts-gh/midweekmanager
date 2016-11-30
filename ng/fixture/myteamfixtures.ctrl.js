angular.module('app')
.controller('MyFixturesCtrl', MyFixturesCtrl);

MyFixturesCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

function MyFixturesCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {
  var vm = this;

  vm.createSelectedPlayer = createSelectedPlayer;
  vm.assignMom = assignMom;

  activate();

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

  function activate() {
    fetchTeam();
    fetchFixture();
    fetchUser();

    function fetchTeam() {
      TeamService.fetchOne($routeParams.team_id).success(function(team) {
        vm.team = team;
      })
    }

    function fetchFixture() {
      FixtureService.fetchFixture($routeParams.fixture_id).success(function(fixture) {
        vm.fixture = fixture;
      })
    }

    function fetchUser() {
      UserSvc.getUser().success(function(user) {
        vm.user = user;
      })
    }
  }
}
