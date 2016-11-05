angular.module('app')
.controller('MyFixturesCtrl', MyFixturesCtrl);

MyFixturesCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

function MyFixturesCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {

  var vm = this;

  FixtureService.fetchFixture($routeParams.fixture_id)
    .success(function(fixture) {
        vm.fixture = fixture;
        console.dir(vm.fixture);
    })
  }
