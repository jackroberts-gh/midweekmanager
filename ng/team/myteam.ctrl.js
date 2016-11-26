angular.module('app')
.controller('MyTeamCtrl', MyTeamCtrl);

MyTeamCtrl.$inject = ['$location', 'TeamService', 'FixtureService', '$routeParams'];

function MyTeamCtrl ($location, TeamService, FixtureService, $routeParams) {

  var vm = this;
  var teamid = $routeParams.team_id;

  vm.icons = [];
  vm.fixtures = [];
  vm.players = [];

  vm.showFixture = showFixture;
  vm.showResult = showResult;
  vm.showPlayer = showPlayer;
  vm.positionOrder = positionOrder;
  vm.addFixture = addFixture;

  activate();

  function activate() {
    TeamService.fetchOne(teamid)
    .success(function(team) {
      vm.team = team;
    })
  }

  function showFixture(fixture_id) {
    $location.path('/teams/' + teamid + '/fixture/' + fixture_id);
  }

  function showResult(fixture_id) {
    $location.path('/teams/' + teamid + '/result/' + fixture_id);
  }

  function showPlayer(player_id) {
    $location.path('/teams/' + teamid + '/player/' + player_id);
  }

  function positionOrder (item) {
    switch (item.position) {
      case 'Goalkeeper':
      return 1;
      case 'Defender':
      return 2;
      case 'Midfielder':
      return 3;
      case 'Forward':
      return 4;
    }
  }

  function addFixture(opposition, fixturedate) {
    FixtureService.create(opposition, fixturedate)
    .success(function(fix) {
      vm.team.fixtures.push(fix);
      TeamService.assignFixtureToTeam(teamid, fix._id)
      .success(function() {
        $("#addFixtureModal").modal('hide');
        // populate fixture with players
      })
    })
  }
}

/*

Code for dynamically creating scope objs for player positions
Would also require injecting $parse, fyi future reference.

function createPositionScope(players) {
angular.forEach(players, function(value, key) {
if ($scope[value.position] === undefined) {
$parse(value.position).assign($scope, 1);
}
else {
$scope[value.position]++;
}
$scope.icons.push($scope[value.position])
}
}*/
