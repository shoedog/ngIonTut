
(function() {
  'use strict';

  angular
    .module('app.widgets')
    .controller('TitleBarCtrl', TitleBarController);

  TitleBarController.$inject = [ '$scope', '$state', '$ionicPlatform'];

    function TitleBarController( $scope, $state, $ionicPlatform  ) {
      var vm = this;
      vm.showNavBar = showNavBar;
      vm.showBackBtn = showBackBtn;

      function showNavBar(){
        //showBar(vm.showNB);
      }

      function showBackBtn(){
        //showBackButton(vm.showBack);
      }
    }
})();
