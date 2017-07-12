(function () {
  'use strict';

  angular.module('BoliviaHubFrontend.pages.inicio', [])
      .config(routeConfig);


  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('inicio', {
          url: '/inicio',
          templateUrl: 'app/pages/inicio/inicio.html',
          controller: 'InicioPageCtrl',
          title: 'Inicio',
          authenticate: false,
          sidebarMeta: {
            order: 800,
          },
        });
  }

})();