angular.module('app')
.controller('MyResultsCtrl', MyResultsCtrl);

MyResultsCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

function MyResultsCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {

  var vm = this;
  vm.teamname = TeamService.currentTeam.name;
  vm.players = TeamService.currentTeam.players;

  FixtureService.fetchFixture($routeParams.fixture_id).success(function(fixture) {
        vm.fixture = fixture;
    })
  }
