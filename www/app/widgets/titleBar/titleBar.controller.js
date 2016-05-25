
(function() {
  'use strict';

  angular
    .module('app.widgets')
    .controller('TitleBarCtrl', TitleBarController);

  TitleBarController.$inject = [ '$scope', '$state', '$ionicPlatform', $ionicNavBarDelegate];

    function TitleBarController( $scope, $state, $ionicPlatform, $ionicNavBarDelegate ) {
      var vm = this;
      vm.showNavBar = showNavBar;
      vm.showBackBtn = showBackBtn;

      function showNavBar(){
        $ionicNavBarDelegate.showBar(vm.showNB);
      }

      function showBackBtn(){
        $ionicNavBarDelegate.showBackButton(vm.showBack);
      }
    }
})();
