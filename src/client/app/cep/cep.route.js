(function() {
  'use strict';

  angular
    .module('app.cep')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'cep',
        config: {
          url: '/cep',
          templateUrl: 'app/cep/cep.html',
          controller: 'CepController',
          controllerAs: 'vm',
          title: 'CEP',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> CEP'
          }
        }
      }
    ];
  }
})();
