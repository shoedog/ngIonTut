(function () {
  'use strict';

  angular.module('app.home')
    .config(homeRoutes);

  homeRoutes.$inject = ['$stateProvider'];

  function homeRoutes($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          "": {
            templateUrl: 'app/home/homeView.html',
            controller: 'HomeViewCtrl',
            controllerAs: 'vm'
          }
        }
      });
  }
})();
