angular.module('demoList.controllers')
  .controller('cameraController', function ($scope, $ionicHistory, $ionicLoading, $ionicPopup) {
    $scope.onBack = function () {
      $ionicHistory.goBack();
    };
    $scope.test1 = function () {
      $ionicLoading.show({
        template: 'Loading...'
      });
      navigator.camera.getPicture(
        function (imageData) {
          var img = angular.element(photo)[0];
          img.src = "data:image/jpeg;base64," + imageData;
          setTimeout(function () {
            $ionicLoading.hide();
          }, 300);
        },
        function (message) {
          $ionicLoading.hide();
          alert(message);
        }, {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA
        });
    };

    $scope.test2 = function () {
      $ionicLoading.show({
        template: 'Loading...'
      });
      navigator.camera.getPicture(
        function (imageData) {
          var img = angular.element(photo)[0];
          img.src = imageData;
          setTimeout(function () {
            $ionicLoading.hide();
          }, 300);
        },
        function (message) {
          $ionicLoading.hide();
          alert(message);
        }, {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA
        });
    };

    $scope.test3 = function () {
      $ionicLoading.show({
        template: 'Loading...'
      });
      navigator.camera.getPicture(
        function (imageData) {
          $ionicLoading.hide();
          $ionicPopup.alert({
            title: 'CordovaCn', // String. The title of the popup.
            template: '文件路径:' + imageData, // String (optional). The html template to place in the popup body.
          });
        },
        function (message) {
          $ionicLoading.hide();
          alert(message);
        }, {
          quality: 50,
          destinationType: Camera.DestinationType.NATIVE_URI,
          sourceType: Camera.PictureSourceType.CAMERA
        });
    };
    $scope.test4 = function () {
      $ionicLoading.show({
        template: 'Loading...'
      });
      navigator.camera.getPicture(
        function (imageData) {
          var img = angular.element(photo)[0];
          img.src = imageData;
          setTimeout(function () {
            $ionicLoading.hide();
          }, 300);
        },
        function (message) {
          $ionicLoading.hide();
          alert(message);
        }, {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        });
    };
  });
