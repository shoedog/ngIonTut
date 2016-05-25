
(function() {
  'use strict';

  angular
    .module('app')
    .config(configRoutes);

  configRoutes.$inject = ['$urlRouteProvider'];

  function configRoutes($urlRouterProvider) {
    //fallback url
    $urlRouterProvider.otherwise('/home');
  }
});
