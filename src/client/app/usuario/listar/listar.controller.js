(function() {
    'use strict';

    angular
        .module('app.usuario.listar')
        .controller('UsuarioListarController', UsuarioListarController);

    UsuarioListarController.$inject = ['logger', 'dataservice', '$state'];

    /* @ngInject */
    function UsuarioListarController(logger, dataservice, $state) {
        var vm = this;
        vm.title = 'Usuários';
        vm.titleResult = 'Usuários encontrados'
        vm.nome = '';

        vm.lista = [];

        activate();

        function activate() {
            logger.info('Tela de usuário ativa!');
        }

        vm.pesquisar = function(){
            dataservice.pesquisarUsuarioPorNome(vm.nome).then(function(data) {
                vm.lista = data;
            });
        }

        vm.listarTodos = function() {
            dataservice.listarTodosUsuario().then(function(data) {
                vm.lista = data;
            });
        }

        vm.alterar = function(usuario) {
            $state.go('usuarioeditar', {usuario: usuario});
        }

        vm.excluir = function(usuario) {
            dataservice.excluirUsuario(usuario.id).then(function(data) {
                vm.listarTodos();
                logger.success('Usuário removido com sucesso!');
            });
        }
    }
})();
