angular.module('app')
.controller('MyTeamCtrl', function ($scope, $location, UserSvc, TeamService, FixtureService, $routeParams, $parse) {

  $scope.icons = [];
  $scope.fixtures = [];

  var teamid = $routeParams.team_id;

  TeamService.fetchOne(teamid)
  .success(function(team) {
    $scope.team = team;
    angular.forEach($scope.team.players, function(value, key) {
      if ($scope[value.position] === undefined) {
        $parse(value.position).assign($scope, 1);
      }
      else {
        $scope[value.position]++;
      }
      $scope.icons.push($scope[value.position])
    });
  })

  $scope.showFixture = function(fixture_id) {
    $location.path('/teams/' + teamid + '/fixture/' + fixture_id);
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
    //Call fixture service to create fixture
    FixtureService.create(opposition, fixturedate)
      .success(function(fix) {
        $scope.team.fixtures.push(fix);
            TeamService.assignFixtureToTeam(teamid, fix._id)
            .success(function() {
                $("#addFixtureModal").modal('hide');
            })
            .error(function() {
                // show error modal
            })
          })
        .error(function(err) {
        // show error dialog
      })
  }
})
