(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['loginService', 'logger', '$location'];
    /* @ngInject */
    function LoginController(loginService, logger, $location) {
        var vm = this;
        vm.title = 'Login';
        vm.user = {username: 'admin@demoiselle.gov.br', password: '123456'};

        activate();

        function activate() {
            logger.info('Activated Login View');
        }

        vm.submit = function (){

            loginService.login(vm.user).then(function() {

                logger.info('Bem vindo !!!!');
                $location.path('/usuario');

            }, function(response) {
                vm.isAuthenticated = false;
                vm.error = 'Error: Usuário e/ou senha inválidos';
            });
        }



        // vm.callRestricted = function() {
        //     $http({url: 'https://cep-fwkdemoiselle.rhcloud.com/api/localidade/count', method: 'GET'})
        //     .success(function (data, status, headers, config) {
        //         vm.message = vm.message + ' ' + data; // Should log 'foo'
        //     })
        //     .error(function (data, status, headers, config) {
        //         //toastr.error('failed: ' + data);
        //         //interceptor is handling the alert
        //     });
        // }


    }
})();
