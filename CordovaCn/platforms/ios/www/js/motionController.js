angular.module('demoList.controllers')
  .controller('motionController', function ($scope, $ionicHistory) {

    $scope.watchid = "";
    $scope.onBack = function () {
      if ($scope.watchid.length > 0) {
        navigator.accelerometer.clearWatch($scope.watchid);
      }
      $ionicHistory.goBack();
    };
    $scope.test1 = function () {
      navigator.accelerometer.getCurrentAcceleration(function (acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: ' + acceleration.timestamp + '\n');
      }, function () {
        alert('onError!');
      });
    };
    $scope.test2 = function () {
      $scope.watchid = navigator.accelerometer.watchAcceleration(function (acceleration) {
        document.getElementById('info').innerHTML = 
        '<p>Acceleration X: ' + acceleration.x + '</p>' +
          '<p>Acceleration Y: ' + acceleration.y + '</p>' +
          '<p>Acceleration Z: ' + acceleration.z + '</p>' +
          '<p>Timestamp: ' + acceleration.timestamp + '</p>';
      }, function () {
        alert('onError!');
      }, { period: 100 });
    };
  });