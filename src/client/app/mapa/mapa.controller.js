(function() {
  'use strict';

  angular
    .module('app.mapa')
    .controller('MapaController', MapaController);

  MapaController.$inject = ['logger'];
  /* @ngInject */
  function MapaController(logger) {
    var vm = this;
    vm.title = 'Mapa';

    activate();

    function activate() {
      logger.info('Activated Map View');
    }
  }
})();
