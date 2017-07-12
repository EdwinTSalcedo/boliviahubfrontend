(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.pages.login', [])
        .config(routeConfig).run(function(){
            
        });

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/pages/login/login.html',
                controller:'LoginPageCtrl',
                title: 'Iniciar Sesión',
                authenticate:true,
                resolve:{
                 keycloak: function(keycloak){
                 return keycloak.getKeycloak('login-required');
                }
            },
                sidebarMeta: {
                    order: 800,
                },
            });
    }

})();
