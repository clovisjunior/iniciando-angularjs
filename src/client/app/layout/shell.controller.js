(function() {
  'use strict';

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger', 'appSecurity', '$location'];
  /* @ngInject */
  function ShellController($rootScope, $timeout, config, logger, appSecurity, $location) {
    var vm = this;
    vm.busyMessage = 'Please wait ...';
    vm.isBusy = true;
    $rootScope.showSplash = true;
    vm.navline = {
      title: config.appTitle,
      text: 'Created by John Papa',
      link: 'http://twitter.com/john_papa'
    };

    activate();

    function activate() {
      logger.success(config.appTitle + ' loaded!', null);
      hideSplash();
      fillUsername();
    }

    function hideSplash() {
      //Force a 1 second delay so we can see the splash.
      $timeout(function() {
        $rootScope.showSplash = false;
      }, 1000);
    }

    function fillUsername() {
        $rootScope.currentUser = appSecurity.getUserFromToken();
    }

    vm.logout = function() {
        appSecurity.removeToken();
        delete $rootScope.currentUser;
        $location.path('/');
    };
  }
})();
