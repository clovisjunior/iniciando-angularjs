(function() {
    'use strict';

    angular
        .module('app.usuario.editar')
        .controller('UsuarioEditarController', UsuarioEditarController);

    UsuarioEditarController.$inject = ['logger', 'dataservice', '$stateParams'];

    /* @ngInject */
    function UsuarioEditarController(logger, dataservice, $stateParams) {
        var vm = this;
        vm.title = 'Edição de Usuário';
        vm.usuario = $stateParams.usuario;
        vm.erros = [];

        activate();

        function activate() {
            logger.info('Tela de usuário ativa!');
        }

        vm.salvar = function() {
            vm.erros = [];

            dataservice.alterarUsuario(vm.usuario).then(function(){
                logger.success('Usuário alterado com sucesso!');
            }, function(res){

                if(res.status == 412) {
                    vm.erros = res.data;
                }
            });
        }

    }
})();
