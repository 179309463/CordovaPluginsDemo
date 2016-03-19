angular.module('demoList.controllers')
  .controller('whitelistController', function($scope, $ionicHistory, $http) {
  $scope.onBack = function() {
    $ionicHistory.goBack();
  };
  $scope.test1 = function() {
    window.open('http://www.baidu.com');
  };
  $scope.test2 = function() {
    $http.get('http://www.baidu.com').then(function(success){
		alert(success.statusText);
	},function(err){
		
	});
  };
});