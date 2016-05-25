
(function() {
  'use strict';

  angular
    .module('app')
    .config(configRoutes);

  configRoutes.$inject = ['$urlRouterProvider'];

  function configRoutes($urlRouterProvider) {
    //fallback url
    $urlRouterProvider.otherwise('/home');
  }
});
