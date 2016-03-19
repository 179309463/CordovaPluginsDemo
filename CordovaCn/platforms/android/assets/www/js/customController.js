angular.module('demoList.controllers')
  .controller('customController', function($scope, $ionicHistory) {
  $scope.onBack = function() {
    $ionicHistory.goBack();
  };
  $scope.test1 = function() {
    navigator.customPlugin.echo(function(result){
      alert(result);
    },function(error){
      alert(error);
    },["false"]);
  };
  $scope.test2 = function() {
    navigator.customPlugin.echo(function(result){
      alert(result);
    },function(error){
      alert(error);
    },["true"]);
  };
  $scope.test3 = function() {
    navigator.customPlugin.echo(function(result){
      alert(result);
    },function(error){
      alert(error);
    },[""]);
  };
});