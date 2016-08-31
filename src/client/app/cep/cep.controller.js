(function() {
  'use strict';

  angular
    .module('app.cep')
    .controller('CepController', CepController);

  CepController.$inject = ['logger'];
  /* @ngInject */
  function CepController(logger) {
    var vm = this;
    vm.title = 'CEP';

    activate();

    function activate() {
      logger.info('Activated Cep View');
    }
  }
})();
