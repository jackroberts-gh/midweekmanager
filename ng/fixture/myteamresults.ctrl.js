angular.module('app')
.controller('MyResultsCtrl', MyResultsCtrl);

MyResultsCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

function MyResultsCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {
  var vm = this;

  vm.team = {};
  vm.fixture = {};
  vm.user = {};
  vm.print = print;

  TeamService.fetchOne($routeParams.team_id).success(function(team) {
    vm.team = team;
  })

  FixtureService.fetchFixture($routeParams.fixture_id).success(function(fixture) {
    vm.fixture = fixture;
  })

  UserSvc.getUser().success(function(user) {
    vm.user = user;
  })

  function print(player) {
    console.dir(player);
  }
}
