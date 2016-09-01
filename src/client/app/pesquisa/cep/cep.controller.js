(function() {
    'use strict';

    angular
        .module('app.cep')
        .controller('CepController', CepController);

    CepController.$inject = ['logger', 'dataservice'];
    /* @ngInject */
    function CepController(logger, dataservice) {
        var vm = this;
        vm.title = 'CEP';
        vm.titleResult = 'CEPs encontrados'
        vm.cep = '';

        vm.listaCeps = [];

        activate();

        function activate() {
            logger.info('Activated Cep View');
        }

        vm.pesquisar = function(){
            dataservice.pesquisarCEP(vm.cep).then(function(data){
                vm.listaCeps = data;
            });
        }
    }
})();
