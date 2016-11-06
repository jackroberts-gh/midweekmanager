angular.module('app')
.controller('MyFixturesCtrl', MyFixturesCtrl);

MyFixturesCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

function MyFixturesCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {

  var vm = this;
  vm.teamname = TeamService.currentTeam.name;
  vm.players = TeamService.currentTeam.players;

  FixtureService.fetchFixture($routeParams.fixture_id).success(function(fixture) {
        vm.fixture = fixture;
    })
  }
