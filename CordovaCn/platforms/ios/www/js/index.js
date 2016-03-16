angular.module('demoList', ['ionic','demoList.controllers'])
  .factory('Demos', function(){
  return {
    all:function() {
      return ['custom','contacts'];
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
    .state('custom', {
      url: '/custom',
      templateUrl: 'templates/custom.html',
      controller: 'customController'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app');
});