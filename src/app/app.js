'use strict';

angular.module('BoliviaHubFrontend', [
    'ngAnimate',
    'ui.bootstrap',
    'ui.sortable',
    'ui.router',
    'ngTouch',
    'toastr',
    'smart-table',
    "xeditable",
    'ui.slimscroll',
    'ngJsTree',
    'angular-progress-button-styles',
    'BoliviaHubFrontend.theme',
    'BoliviaHubFrontend.pages',
    'ngCookies'
]).factory('keycloak', function(){
   return {
        getKeycloak: function(type){
            /**configuracion del Keycloak */
                var token = '';
                var userInfoVar = '';
            //angular.module('KeycloakApp', ['ngCookies']);
                var keycloakConfig = {
                    "url": "http://192.168.1.178:8080/auth",
                    "realm": "catalogos",
                    "ssl-required": "external",
                    "clientId": "angularjs-client",  
                    "credentials": {
                        "secret": "d6e0bc1e-f426-4f57-b8ca-8dfd3ab4b785"
                    },
                    "policy-enforcer": {}

                };
                var keycloak = Keycloak(keycloakConfig);
                keycloak.init({
                    onLoad: type
                }).success(function (authenticated) {
                    keycloak.loadUserInfo().success(function (userInfo) {
                        userInfoVar = userInfo;
                        token = keycloak.token;
                        console.log(keycloak);
                        return keycloak;
                    // obtenerDatos(keycloak, userInfo);
                    
                    });
                }).error(function() {
                });
        }
    };

  
    
});
