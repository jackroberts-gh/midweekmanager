angular.module('app')
.controller('MyTeamCtrl', function ($scope, $location, UserSvc, TeamService, FixtureService, $routeParams, $parse) {

  var teamid = $routeParams.team_id;

  $scope.icons = [];
  $scope.fixtures = [];
  $scope.players = [];

  TeamService.fetchOne(teamid)
    .success(function(team) {
      $scope.team = team;
    }
  )

$scope.showFixture = function(fixture_id) {
  $location.path('/teams/' + teamid + '/fixture/' + fixture_id);
};

$scope.showResult = function(fixture_id) {
  $location.path('/teams/' + teamid + '/result/' + fixture_id);
};

$scope.showPlayer = function(player_id) {
  $location.path('/teams/' + teamid + '/player/' + player_id);
};

$scope.positionOrder = function (item) {
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
};

$scope.addFixture = function(opposition, fixturedate) {
  FixtureService.create(opposition, fixturedate).success(function(fix) {
    $scope.team.fixtures.push(fix);
    TeamService.assignFixtureToTeam(teamid, fix._id).success(function() {
      $("#addFixtureModal").modal('hide');
      // populate fixture with players
    })
    .error(function() {
      // show error modal for assign fixture problem
    })
  })
    .error(function() {
      // show error modal for creating fixture problem
    })
}

/* function createPositionScope(players) {
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
  }
)
