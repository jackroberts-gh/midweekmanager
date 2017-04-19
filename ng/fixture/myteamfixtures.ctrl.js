(function() {
  'use strict';
  angular.module('app')
    .controller('MyFixturesCtrl', MyFixturesCtrl);

  MyFixturesCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams', '$location'];

  function MyFixturesCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams, $location) {
    var vm = this;

    vm.assignMom = assignMom;
    vm.inOut = inOut;
    vm.goalCount = goalCount;
    vm.confirmResult = confirmResult;

    activate();

    function inOut(player) {
      // if player already exists in fixture, set in/out status to player.in
      if (vm.user._id === player._userid) {
        var newPlayer = {
          _playerid: player._id,
          goals: player.goals,
          mom: player.mom,
          in: player.in,
        }
      }

      FixtureService.updatePlayerInFixture($routeParams.fixture_id, newPlayer).success(function(fixture) {
        console.dir(fixture);
      })

    }

    function assignMom(player) {
      angular.forEach(vm.team.players, function(item) {
        item.mom = false;
      })
      player.mom = true;
    }

    function goalCount() {
      console.log('goal count');
    }

    function confirmResult() {
      FixtureService.confirmResult($routeParams.fixture_id).success(function(fixture) {
        $location.path('/teams/' + $routeParams.team_id);
      })
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
})();