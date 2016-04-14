angular.module('demoList', ['ionic','demoList.controllers'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}).factory('Demos', function(){
  return {
    all:function() {
      return ['custom','batterystatus','camera','console','contacts','device','whitelist'];
    }
  }
}).factory('utils',function(){
  return {
    imgToBase64:function(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);

        var dataURL = canvas.toDataURL("image/png");
        return dataURL
    }
  }
}).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      templateUrl: 'templates/menus.html',
      controller: 'appCtrl'
    })
    .state('custom', {
      url: '/custom',
      templateUrl: 'templates/custom.html',
      controller: 'customController'
    })
    .state('batterystatus', {
      url: '/batterystatus',
      templateUrl: 'templates/batterystatus.html',
      controller: 'batterystatusController'
    })
  	.state('camera', {
      url: '/camera',
      templateUrl: 'templates/camera.html',
      controller: 'cameraController'
    })
	.state('contacts', {
      url: '/contacts',
      templateUrl: 'templates/contacts.html',
      controller: 'contactsController'
    })
  	.state('console', {
      url: '/console',
      templateUrl: 'templates/console.html',
      controller: 'consoleController'
    })
  	.state('device', {
      url: '/device',
      templateUrl: 'templates/device.html',
      controller: 'deviceController'
    })
	.state('whitelist', {
      url: '/whitelist',
      templateUrl: 'templates/whitelist.html',
      controller: 'whitelistController'
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app');
});

angular.module('demoList.controllers',[]);