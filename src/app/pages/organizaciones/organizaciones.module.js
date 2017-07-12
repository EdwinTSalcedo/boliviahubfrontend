/**
 * @author tnina@adsib.gob.bo
 * created on 07.04.2017
 */
(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.pages.organizaciones', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('organizaciones', {
                url: '/organizaciones',
                title: 'organizaciones',
                templateUrl: 'app/pages/organizaciones/organizaciones.html',
                controller: 'OrganizacionesPageCtrl',
            }).state('organizaciones.listar', {
                url: "/",
                controller:'OrganizacionesPageCtrl',
                templateUrl: "app/pages/organizaciones/organizaciones.html",
                scope:{}
            })
            .state('organizaciones.adicionar', {
                url: "/adicionarGobierno",
                controller:'addGobiernoCtrl',
                templateUrl: "app/pages/organizaciones/gobiernos/adicionarGobierno.html",
                scope:{}
            })
            .state('organizaciones.editar', {
                url: "/:id/editar",
                controller:'editGobiernoCtrl',
                templateUrl: "app/pages/organizaciones/gobiernos/editarGobierno.html",
            });
    }

})();
