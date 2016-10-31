angular.module('app')
.controller('MyTeamCtrl', function ($scope, UserSvc, TeamService, FixtureService, $routeParams, $parse) {

  $scope.icons = [];



  TeamService.fetchOne($routeParams.team_id)
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
      .success(function(fixture) {
          $scope.fixtures.push(fixture);
      })
      .error(function(err) {
        // show error dialog
      })
    // Call team service to assign fixture to team
    // Done

    $("#addFixtureModal").modal('hide');
  }

})
