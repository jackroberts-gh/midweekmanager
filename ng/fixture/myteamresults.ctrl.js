(function() {
  'use strict';
  angular.module('app')
    .controller('MyResultsCtrl', MyResultsCtrl);

  MyResultsCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

  function MyResultsCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {
    var vm = this;

    activate();

    function activate() {
      fetchTeam().success(fetchFixture);

      function fetchTeam() {
        return TeamService.fetchOne($routeParams.team_id).success(function(team) {
          vm.team = team;
        })
      }

      function fetchFixture() {
        return FixtureService.fetchFixture($routeParams.fixture_id).success(function(fixture) {
          vm.fixture = fixture;
          angular.forEach(vm.fixture.played, function(item) {
            PlayerService.fetchOnePlayerWithPlayerId(item._playerid).success(function(player) {
              item.surname = player.surname;
              console.dir(player);
            })
          })
        })
        console.dir(vm.fixture.played);
      }
    }
  }
})();