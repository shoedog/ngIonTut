(function() {
  'use strict';

  angular.module('app.widgets')
    .directive('titlebar', titlebar);

  function titlebar() {
    var directive = {
      scope: {},
      bindToController: {
        title: '=',
        returnState: '=',
        returnLabel: '=',
        isCloseTitle: '=',
        returnCallback: '='
      },
      templateUrl: 'app/widgets/titleBar/titleBar.html',
      restrict: 'EA',
      controller: 'TitleBarCtrl',
      controllerAs: 'vm'
    };
    return directive;
  }
})();
