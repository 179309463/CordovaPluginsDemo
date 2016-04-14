angular.module('demoList.controllers')
  .controller('deviceController', function($scope, $ionicHistory) {
  $scope.onBack = function() {
    $ionicHistory.goBack();
  };
  $scope.cordova      = device.cordova;
  $scope.model        = device.model;
  $scope.platform     = device.platform;
  $scope.uuid         = device.uuid;
  $scope.version      = device.version;
  $scope.manufacturer = device.manufacturer;
  $scope.isVirtual    = device.isVirtual;
  $scope.serial       = device.serial;
});