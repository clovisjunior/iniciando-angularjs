(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {

    var URL = 'https://cep-fwkdemoiselle.rhcloud.com';

    var service = {
        pesquisarCEP: pesquisarCEP,
        pesquisarLogradouro: pesquisarLogradouro,
        pesquisarUsuarioPorNome: pesquisarUsuarioPorNome,
        listarTodosUsuario: listarTodosUsuario,
        alterarUsuario: alterarUsuario,
        incluirUsuario: incluirUsuario,
        excluirUsuario: excluirUsuario
    };

    return service;

    function pesquisarCEP(cep){
        return $http
            .get(URL + '/api/logradouro/cep/' + cep)
            .then(success)
            .catch(fail);
    }

    function pesquisarLogradouro(logradouro) {
        return $http
            .get(URL + '/api/logradouro/logNome/' + logradouro)
            .then(success)
            .catch(fail);
    }

    function pesquisarUsuarioPorNome(nome) {
        return $http
            .get(URL + '/api/user/nome/' + nome)
            .then(success)
            .catch(fail);
    }

    function listarTodosUsuario(){
        return $http
            .get(URL + '/api/user')
            .then(success)
            .catch(fail);
    }

    function alterarUsuario(usuario) {
        return $http
            .put(URL + '/api/user', usuario)
            .then(success)
            .catch(fail);
    }

    function excluirUsuario(id) {
        return $http
            .delete(URL + '/api/user/' + id)
            .then(success)
            .catch(fail);
    }

    function incluirUsuario(usuario) {
        return $http
            .post(URL + '/api/user', usuario)
            .then(success)
            .catch(fail);
    }

    function success(response) {
        return response.data;
    }

    function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
    }
  }
})();
