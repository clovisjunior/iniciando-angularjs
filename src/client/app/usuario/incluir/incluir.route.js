(function() {
    'use strict';

    angular
        .module('app.usuario.incluir')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'usuarioincluir',
                config: {
                    url: '/usuario-incluir',
                    templateUrl: 'app/usuario/incluir/index.html',
                    controller: 'UsuarioIncluirController',
                    controllerAs: 'vm',
                    title: 'Usuário',
                }
            }

        ];
    }
})();
