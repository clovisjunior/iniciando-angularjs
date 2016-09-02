(function () {
    'use strict';

    var app = angular.module('app.security');

    app.factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$rootScope', '$q', 'appSecurity', 'toastr'];

    /* @ngInject */
    function authInterceptor($rootScope, $q, appSecurity, toastr) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if (appSecurity.getToken()) {
                    config.headers.Authorization = 'Token ' + appSecurity.getToken();
                }
                return config;
            },
            responseError: function (rejection) {
                console.log(rejection);
                var msg = rejection.data + ': ' + rejection.config.url;
                if (rejection.status === 401) {
                    toastr.error('Permissão negada');
                }
                else{
                    toastr.error(msg);
                }

                return $q.reject(rejection);
            }
        };
    }

    app.config(function ($httpProvider) {
        $httpProvider.defaults.cache = false;
        $httpProvider.interceptors.push('authInterceptor');
    });
})();
