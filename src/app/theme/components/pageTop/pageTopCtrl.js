/**
 * @author tnina - adsib
 * created 19.04.17
 */
(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.theme.components')
        .controller('pageTopCtrl', pageTopCtrl);

    /** @ngInject */
    function pageTopCtrl($scope, $location, $http, $cookies) {
        $scope.isCollapsed = true;
        $scope.visible = true;
        $scope.cerrarSession = function(){
        }

        /*$scope.login = function(){
            console.log('login');
             
        /**configuracion del Keycloak 
            var token = '';
            var userInfoVar = '';
            
        //angular.module('KeycloakApp', ['ngCookies']);
        
             $scope.visible = false;
                
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
            $cookies.put('cookie',keycloak);
                $cookies.put('cookie','true');
            keycloak.init({
                onLoad: 'login-required'
            })
            .success(function (authenticated) {
                
                
                //alert(authenticated ? 'authenticated' : 'not authenticated');
                keycloak.loadUserInfo().success(function (userInfo) {
                    userInfoVar = userInfo;
                    token = keycloak.token;
                    console.log(keycloak);
                // obtenerDatos(keycloak, userInfo);
                
                });
            }).error(function() {
                //alert('failed to initialize');
            });

        }*/
    }
})();
