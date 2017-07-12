/**
 * @author tnina@adsib.gob.bo
 * created on 07.04.2017
 */
(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.pages.proyectos', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('proyectos', {
                url: '/proyectos',
                title: 'proyectos',
                templateUrl: 'app/pages/proyectos/proyectos.html',
                controller: 'ProyectosPageCtrl',
            });
    }   

})();
