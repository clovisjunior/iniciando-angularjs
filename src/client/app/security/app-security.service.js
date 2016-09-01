(function() {
    'use strict';

    var app = angular.module('app.security');

    app.factory('appSecurity', appSecurity);

    appSecurity.$inject = ['$window'];

    /* @ngInject */
    function appSecurity($window) {

        var service = {
            getUserFromToken: getUserFromToken,
            setToken: setToken,
            removeToken: removeToken,
            getToken: getToken
        };

        return service;

        function getUserFromToken() {
            var token = $window.localStorage.token;
            var user = null;

            if(token){
                var encodedProfile = token.split('.')[1];
                var profile = JSON.parse(url_base64_decode(encodedProfile));
                user = JSON.parse(profile.user);
            }

            return user;
        }

        function getToken(){
            return $window.localStorage.token;
        }

        function setToken(token) {
            $window.localStorage.token = token;
        }

        function removeToken() {
            delete $window.localStorage.token;
        }

        //this is used to parse the profile
        function url_base64_decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output); //polyfill https://github.com/davidchambers/Base64.js
        }

    }

})();
