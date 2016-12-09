(function() {
  'use strict';
  angular.module('app')
    .controller('MyResultsCtrl', MyResultsCtrl);

  MyResultsCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

  function MyResultsCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {
    var vm = this;

    activate();

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
})();