angular.module('demoList', ['ionic','demoList.controllers'])
  .factory('Demos', function(){
  return {
    all:function() {
      return ['custom','contacts','whitelist'];
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
    .state('contacts', {
      url: '/contacts',
      templateUrl: 'templates/contacts.html',
      controller: 'contactsController'
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