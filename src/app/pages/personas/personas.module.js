/**
 * @author tnina@adsib.gob.bo
 * created on 07.04.2017
 */
(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.pages.personas', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('personas', {
                url: '/personas',
                title: 'personas',
                templateUrl: 'app/pages/personas/personas.html',
                controller: 'PersonasPageCtrl',
            });
    }

})();
