(function() {
    'use strict';

    angular
        .module('app.usuario.incluir')
        .controller('UsuarioIncluirController', UsuarioIncluirController);

    UsuarioIncluirController.$inject = ['logger', 'dataservice'];

    /* @ngInject */
    function UsuarioIncluirController(logger, dataservice) {
        var vm = this;
        vm.title = 'Novo Usuário';
        vm.usuario = {};
        vm.erros = [];

        activate();

        function activate() {
            logger.info('Tela de usuário ativa!');
        }

        vm.salvar = function() {
            vm.erros = [];

            dataservice.incluirUsuario(vm.usuario).then(function(){
                logger.success('Usuário inserido com sucesso!');
            }, function(res){

                if(res.status == 412) {
                    vm.erros = res.data;
                }
            });
        }

    }
})();
