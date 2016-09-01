(function(){
    'use strict';

    angular.module('app.login')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', 'appSecurity', '$rootScope'];

    function loginService($http, appSecurity, $rootScope){
        var service = {
            login: login,
            isAuthenticated: isAuthenticated
        };

        function login(user){

            appSecurity.removeToken();

            return $http
                    .post('https://cep-fwkdemoiselle.rhcloud.com/api/auth', user)
                    .success(function (res, status, headers) {
                        var token = headers('Set-Token');
                        appSecurity.setToken(token);
                        $rootScope.currentUser = appSecurity.getUserFromToken();
                        return res;
                    });

        }

        function isAuthenticated() {
            return $rootScope.currentUser ? true : false;
        };

        return service;
    }

})();
