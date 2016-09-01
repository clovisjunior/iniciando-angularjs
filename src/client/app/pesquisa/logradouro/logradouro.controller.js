(function() {
    'use strict';

    angular
        .module('app.logradouro')
        .controller('LogradouroController', LogradouroController);

    LogradouroController.$inject = ['logger', 'dataservice'];

    /* @ngInject */
    function LogradouroController(logger, dataservice) {
        var vm = this;
        vm.title = 'Pesquisa por Logradouro';
        vm.titleResult = 'Logradouros encontrados'
        vm.logradouro = '';

        vm.lista = [];

        activate();

        function activate() {
            logger.info('Logradouro ativo!');
        }

        vm.pesquisar = function(){
            dataservice.pesquisarLogradouro(vm.logradouro).then(function(data){
                vm.lista = data;
            });
        }
    }
})();
