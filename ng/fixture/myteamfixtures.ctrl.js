(function() {
  'use strict';
  angular.module('app')
    .controller('MyFixturesCtrl', MyFixturesCtrl);

  MyFixturesCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams', '$location'];

  function MyFixturesCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams, $location) {
    var vm = this;

    vm.assignMom = assignMom;
    vm.confirmResult = confirmResult;
    vm.updateIt = updateIt;
    activate();

    function updateIt(player) {

      var playr = {
        _playerid: player._id,
        goals: player.goals,
        mom: player.mom,
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

      angular.forEach(vm.fixture.played, function(played) {
        played.mom = false;
      })

      player.mom = true;
      updateIt(player);
    }

    function confirmResult() {

      angular.forEach(vm.fixture.played, function(played) {
        vm.fixture.goalsfor += played.goals
      })

      vm.fixture.result = true;

      FixtureService.update(vm.fixture).success(function(fixture) {
        console.dir(fixture);
      })
      //FixtureService.confirmResult($routeParams.fixture_id).success(function(fixture) {

      $location.path('/teams/' + $routeParams.team_id);
    }

    function activate() {
      fetchTeam().success(fetchFixture).success(fetchUser);

      function fetchTeam() {
        return TeamService.fetchOne($routeParams.team_id).success(function(team) {
          vm.team = team;
          console.dir(vm.team);
        })
      }

      function fetchFixture() {
        return FixtureService.fetchFixture($routeParams.fixture_id).success(function(fixture) {
          vm.fixture = fixture;
          angular.forEach(vm.fixture.played, function(item) {
            angular.forEach(vm.team.players, function(player) {
              if (item._playerid === player._id) {
                player.in = item.in;
                player.mom = item.mom;
                player.goals = item.goals
              }
            })
          })
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