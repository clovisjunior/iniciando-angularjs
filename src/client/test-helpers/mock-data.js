/* jshint -W079 */
var mockData = (function() {
  return {
    getMockStates: getMockStates
  };

  function getMockStates() {
    return [
      {
        state: 'usuario',
        config: {
          url: '/',
          templateUrl: 'app/usuario/listar/index.html',
          title: 'usuario',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Usuario'
          }
        }
      }
    ];
  }

})();
