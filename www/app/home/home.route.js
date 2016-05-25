(function () {
  'use strict';

  angular.module('app.home')
    .config(homeRoutes);

  homeRoutes.$inject = ['$stateProvider'];

  function homeRoutes($stateProvider) {
    $stateProvider
      .state('home', {
        abstract: true,
        url: '/home',
        template: '<ui-view/>' //Abstract needs ui-view for children
      })
      .state('home.menu', {
        url: '/menu',
        views: {
          "": {
            templateUrl: 'app/home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
          }
        }
      })
  }
})();
