angular.module('app')
.controller('MyPlayersCtrl', MyPlayersCtrl);

MyPlayersCtrl.$inject = ['UserSvc', 'TeamService', 'PlayerService', 'FixtureService', '$routeParams'];

function MyPlayersCtrl(UserSvc, TeamService, PlayerService, FixtureService, $routeParams) {

  var vm = this;

  UserSvc.getPlayersUser($routeParams.player_id)
    .success(function(user) {
        vm.user = user;
    })



}
