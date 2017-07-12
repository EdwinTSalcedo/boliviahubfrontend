(function () {
  'use strict';

  angular.module('BoliviaHubFrontend.pages.proyecto', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('proyecto', {
          url: '/proyecto',
          templateUrl: 'app/pages/proyecto/proyecto.html',
          controller: 'ProyectoPageCtrl',
          title: 'Proyecto Bolivia Hub',
          sidebarMeta: {
            order: 800,
          },
        });
  }

})();