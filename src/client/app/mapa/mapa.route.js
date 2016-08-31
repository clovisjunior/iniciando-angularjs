(function() {
  'use strict';

  angular
    .module('app.mapa')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'mapa',
        config: {
          url: '/mapa',
          templateUrl: 'app/mapa/mapa.html',
          controller: 'MapaController',
          controllerAs: 'vm',
          title: 'Mapa',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> Mapa'
          }
        }
      }
    ];
  }
})();
