
(function() {

  angular
    .module('app')
    .config(configureRoutes);

  configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureRoutes($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('home', {
        url: '/',
        views: {
          '': {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('home.list', {
      url: '/list',
      views: {
        '': {
          templateUrl: 'app/home/nestedlist.html',
          controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Poodle'];
          }
        }
      }
    });
    $urlRouterProvider.otherwise('/');
  }
})();
