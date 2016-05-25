(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeViewCtrl', HomeViewController);

  HomeViewController.$inject = ['$scope', '$state', '$ionicPlatform'];

    function HomeViewController( $scope, $state, $ionicPlatform) {
      var vm = this
      

    }
})();
