(function() {
    'use strict';

    angular
        .module('app.logradouro')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'logradouro',
                config: {
                    url: '/logradouro',
                    templateUrl: 'app/pesquisa/logradouro/index.html',
                    controller: 'LogradouroController',
                    controllerAs: 'vm',
                    title: 'Logradouro',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Por Logradouro'
                    }
                }
            },

        ];
    }
})();
