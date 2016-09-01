(function() {
    'use strict';

    angular
        .module('app.usuario.editar')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'usuarioeditar',
                config: {
                    url: '/usuario-editar',
                    templateUrl: 'app/usuario/editar/index.html',
                    controller: 'UsuarioEditarController',
                    controllerAs: 'vm',
                    title: 'Usuário',
                    params: {
                        usuario: null
                    }
                }
            }

        ];
    }
})();
