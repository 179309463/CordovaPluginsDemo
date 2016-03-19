angular.module('demoList.controllers')
  .controller('appCtrl', function($scope, Demos) {
  $scope.plugins = Demos.all();
});