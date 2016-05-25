
(function() {
  'use strict';

  angular
    .module('app.widgets')
    .controller('TitleBarCtrl', TitleBarController);

  TitleBarController.$inject = [ '$scope', '$state', '$ionicPlatform'];

    function TitleBarController( $scope, $state, $ionicPlatform ) {
      var vm = this;
      vm.navigateBack = navigateBack;
      vm.hasReturnState = hasReturnState;

      function activate() {
        // For handling the Android system back button.
        // See http://ionicframework.com/docs/api/service/$ionicPlatform/ for details
        if(vm.returnState) {
          var deregister = $ionicPlatform.registerBackButtonAction(vm.navigateBack, 100);
          $scope.$on('$destroy', deregister);
        }
      }

      function navigateBack() {
        if (vm.returnState) {
          $state.go(vm.returnState);
        }
        else if (typeof vm.returnCallback === 'function') {
          vm.returnCallback();
        }
      }

      function hasReturnState() {
        return vm.returnState || typeof vm.returnCallback === 'function';
      }


      activate();

    }
})();
