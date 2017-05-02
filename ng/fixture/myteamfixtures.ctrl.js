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

      console.dir(player);

      var playr = {
        _playerid: player._id,
        goals: player.goals,
        mom: player.mom === true ? true : false,
        in: player.in,
      }

      var found = false;

      angular.forEach(vm.fixture.played, function(item) {
        if (item._playerid === player._id) {
          item.goals = player.goals;
          item.mom = player.mom;
          item.in = player.in;
          found = true;
        }
      })

      if (!found) {
        vm.fixture.played.push(playr);
      }

      FixtureService.update(vm.fixture).success(function(fixture) {
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
      fetchTeam().success(fetchFixture).success(fetchUser);

      function fetchTeam() {
        return TeamService.fetchOne($routeParams.team_id).success(function(team) {
          vm.team = team;
        })
      }

      function fetchFixture() {
        return FixtureService.fetchFixture($routeParams.fixture_id).success(function(fixture) {
          vm.fixture = fixture;
        })
      }

      function fetchUser() {
        return UserSvc.getUser().success(function(user) {
          vm.user = user;
        })
      }

    }
  }
})();