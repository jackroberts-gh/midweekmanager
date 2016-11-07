angular.module('app')
.controller('MyResultsCtrl', MyResultsCtrl);

MyResultsCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

function MyResultsCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {
  var vm = this;

  vm.team = TeamService.currentTeam;
  vm.fixture = {};
  vm.user = {};
  vm.print = print;

  FixtureService.fetchFixture($routeParams.fixture_id).success(function(fixture) {
    vm.fixture = fixture;
  })

  UserSvc.getUser().then(function(user) {
    vm.user = user;
  })

  function print(player) {
    console.dir(player);
  }
}
