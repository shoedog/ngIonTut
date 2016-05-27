(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeCtrl', HomeViewController);

  HomeViewController.$inject = ['$scope', '$state', '$ionicPlatform'];

    function HomeViewController( $scope, $state, $ionicPlatform) {
      var vm = this


    }
})();
