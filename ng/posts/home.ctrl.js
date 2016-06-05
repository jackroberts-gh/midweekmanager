angular.module('app')
.controller('HomeCtrl', function ($scope) {
  $scope.photos = [
    {id: 1, path: 'public/1.jpg'},
    {id: 2, path: 'public/2.jpg'},
    {id: 3, path: 'public/3.jpg'},
    {id: 4, path: 'public/4.jpg'}
  ]
})
