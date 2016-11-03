angular.module('app')
.controller('MyFixturesCtrl', MyFixturesCtrl);

MyFixturesCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

function MyFixturesCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {

  var vm = this;

  
}
