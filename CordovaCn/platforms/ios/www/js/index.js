angular.module('demoList', ['ionic','demoList.controllers'])
  .factory('Demos', function(){
  return {
    all:function() {
      return ['customPlugin'];
    }
  }
}).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      templateUrl: 'templates/menus.html',
      controller: 'appCtrl'
    })
    .state('detail', {
      url: '/detail/:id',
          templateUrl: 'templates/detail.html',
          controller: 'menusController'
    })
    .state('customPlugin', {
      url: '/customPlugin',
      templateUrl: 'templates/customPlugin.html',
      controller: 'customPluginController'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app');
});