angular.module('demoList.controllers',[])
.controller('appCtrl', function($scope, $state, Demos) {
  $scope.plugins = Demos.all();
  $scope.onDetail = function(item) {
    $state.go('/detail');
  }
})
.controller('menusController', function($scope, $stateParams) {
//  var a = $statsParams.id;
//  alert(a);
})
.controller('customPluginController', function($scope, $stateParams) {
  alert('1111111');
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
  }
  $scope.test3 = function() {
    navigator.customPlugin.echo(function(result){
      alert(result);
    },function(error){
      alert(error);
    },[""]);
  }
});