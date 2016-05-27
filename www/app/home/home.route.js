(function() {

  angular
    .module('app.home')
    .config(configureRoutes);

  configureRoutes.$inject = ['$stateProvider'];

  function configureRoutes($stateProvider) {


    $stateProvider
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
  }
})();
