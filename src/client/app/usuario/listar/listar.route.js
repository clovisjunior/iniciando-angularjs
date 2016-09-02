(function() {
    'use strict';

    angular
        .module('app.usuario.listar')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'usuario',
                config: {
                    url: '/usuario',
                    templateUrl: 'app/usuario/listar/index.html',
                    controller: 'UsuarioListarController',
                    controllerAs: 'vm',
                    title: 'Usuário',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-lock"></i> Usuario'
                    }
                }
            }

        ];
    }
})();
