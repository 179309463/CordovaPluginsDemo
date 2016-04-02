angular.module('demoList.controllers')
  .controller('batterystatusController', function($scope, $ionicHistory, utils) {

  $scope.message = "点击监听按钮开始监听电源插拔事件。然后尝试插拔充电电源线。";
  function onBatteryStatus(status) {
        alert("电量: " + status.level + " 充电？: " + status.isPlugged);
  }

  $scope.onBack = function() {
	window.removeEventListener("batterystatus", onBatteryStatus, false);
    $ionicHistory.goBack();
  };
  $scope.test1 = function() {
    window.addEventListener("batterystatus", onBatteryStatus, false);
  };
  $scope.test2 = function() {
    window.removeEventListener("batterystatus", onBatteryStatus, false);
  };
});