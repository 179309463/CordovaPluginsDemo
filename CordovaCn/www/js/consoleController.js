angular.module('demoList.controllers')
  .controller('consoleController', function($scope, $ionicHistory) {
  $scope.onBack = function() {
    $ionicHistory.goBack();
  };
  $scope.test1 = function() {
    console.log('%j',{console:'format arg as JSON'});
	alert('看Log日志');
  };
  $scope.test2 = function() {
    console.log('%o',{console:'format arg as JSON'});
	alert('看Log日志');
  };
  $scope.test3 = function() {
    console.log('%c','a');
	alert('在有第二个参数的时候什么也不输出，但是只有一个参数的时候会输出%c');
  };
  $scope.test4 = function() {
    console.log('%%','第二个参数');
	alert('有第二个参数的时候输出%，否则输出%%');
  };
  $scope.test5 = function() {
    console.log('想打印啥打印啥：','我要打印的');
	alert('想打印啥打印啥');
  };
});