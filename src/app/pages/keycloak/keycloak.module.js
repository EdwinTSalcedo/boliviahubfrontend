/**
 * @author tnina@adsib.gob.bo
 * created on 07.04.2017
 */
(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.pages.keycloak', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('keycloak', {
                url: '/login',
                title: 'login',
                controller: 'keycloakCtrl',
            });
    }

})();
