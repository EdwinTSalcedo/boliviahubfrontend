/**
 * @author a.demeshko
 * created on 21.01.2016
 */
(function () {
  'use strict';

  






angular.module('BoliviaHubFrontend.pages.keycloak')
        .controller('keycloakCtrl', keycloakCtrl);

    function keycloakCtrl($scope, fileReader, $filter, $uibModal, $http) {
        

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
	    onLoad: 'login-required'
	  }).success(function (authenticated) {
        alert(authenticated ? 'authenticated' : 'not authenticated');
	    keycloak.loadUserInfo().success(function (userInfo) {
            userInfoVar = userInfo;
            token = keycloak.token;
            console.log(keycloak);
	     // obtenerDatos(keycloak, userInfo);
        
	    });
	  }).error(function() {
            alert('failed to initialize');

      });
    
  /*function obtenerDatos(keycloak, userInfo, $http, $scope) {        
       
      angular.module('KeycloakApp')
      .run(function ($rootScope, $http, $interval, $cookies) {
		  var updateTokenInterval = $interval(function () {
          // refresh token if it's valid for less then 15 minutes
          keycloak.updateToken(15)
            .success(function (refreshed) {
              if (refreshed) {
                $cookies.put('X-Authorization-Token', keycloak.token);
              }
            });
        }, 10000);

        $cookies.put('X-Authorization-Token', keycloak.token);
        $rootScope.userLogout = function () {
          $cookies.remove('X-Authorization-Token');
		  $interval.cancel(updateTokenInterval);
          keycloak.logout();
        };
          $rootScope.authData = {};
          $http.jsonp("http://192.168.1.178:3000/test?callback=JSON_CALLBACK")
			.success(function (response) {
						$rootScope.authData.token = response.token;
						$rootScope.authData.username = response.username;
  		 });
      });

    //angular.bootstrap(document, ['KeycloakApp']);
  }*/



/**configuracion del Keycloak */
    }        






})();




