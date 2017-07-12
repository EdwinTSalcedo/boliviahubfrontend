/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

   var urlBackend = 'http://192.168.40.187/api_backend/api/proyectos';

   var urlUsuario = "http://localhost:3000/api/usuarios";
   var urlKeycloak = "http://192.168.1.178:8080/auth/admin/realms/catalogos/users/";









 
    
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











    angular.module('BoliviaHubFrontend.pages.profile')
        .controller('ProfilePageCtrl', ProfilePageCtrl)
        .controller('DesactivarCtrl', DesactivarCtrl);

    /** @ngInject */
    function ProfilePageCtrl($scope, fileReader, $filter, $uibModal, $http) {
        $scope.proyectos = [];
        console.log(userInfoVar);
        $scope.usuario = {nombre:'',apellidos:'',proyectos:'', ocupacion:'',email:'', telefono:''}
        $http.get(urlUsuario).then(function(data){
             var usuarios = data.data.datos;
             console.log(userInfoVar); 
             usuarios.forEach(function (dUsuario) { 
                 if(userInfoVar.sub == dUsuario.keycloak_id){
                    $scope.usuario._id = dUsuario._id;
                    $scope.usuario.keycloak_id = userInfoVar.sub;
                    $scope.usuario.nombre = userInfoVar.given_name;
                    $scope.usuario.apellidos = userInfoVar.family_name;
                    $scope.usuario.proyectos = 'proyectos1';
                    $scope.usuario.ocupacion = dUsuario.ocupacion;
                    $scope.usuario.email = userInfoVar.email;
                    $scope.usuario.telefono = dUsuario.telefono;
                    $scope.usuario.token = token;
                    $scope.usuario.password = '';
                    $scope.usuario.passwordConfirm = '';
                    $scope.usuario.mensaje = '';

                 }
            }); 
       });
       $scope.desactivar = function(usuario){
            $uibModal.open({
                animation: true,
                controller: 'DesactivarCtrl',
                templateUrl: 'app/pages/profile/desactivarCuenta.html',
                scope:$scope 
            }).result.then(function(link) {
            });
       }

       $scope.guardarDatos = function(usuario){
            usuario.mensaje = "dnsjkandsjkanda";
            if(usuario.password === usuario.passwordConfirm){
                if(usuario.password.length >= 8){
                     var usuario2 = {
                            "totp": false,
                            "emailVerified": true,
                            "firstName": usuario.nombre,
                            "lastName": usuario.apellidos,
                            "email": usuario.email,
                            
                        }
                    var credentials = { "type": "password", "temporary": false, "value": usuario.password }
                    $http.put(urlUsuario+'/'+usuario._id,usuario);
                    $http.put(urlKeycloak+usuario.keycloak_id,usuario2,{headers:{'Authorization':'Bearer '+usuario.token}});
                    $http.put(urlKeycloak+usuario.keycloak_id+'/reset-password',credentials,{headers:{'Authorization':'Bearer '+usuario.token}});
                        console.log(usuario);
                    
                }else{
                    usuario.mensaje = "Debe tener una longitud mayor a 7 caracteres"
                }
            }else{
                    usuario.mensaje = "Las contraseñas no coinciden"
            }            
          


       }
        //delete $http.defaults.headers.common['X-Requested-With'];
        $scope.getProyectos = function() {
            $http.get(urlBackend).then(
                function(data) {
                    data = data.data;
                    if (data.datos) {
                        $scope.proyectos = data.datos;
                        console.log(data);
                    }
                }
            ).catch(function(err) {
                console.log(err);
            });
        };
        $scope.getProyectos();

        $scope.picture = $filter('profilePicture')('User');

        $scope.removePicture = function() {
            $scope.picture = $filter('appImage')('theme/no-photo.png');
            $scope.noPicture = true;
        };

        $scope.uploadPicture = function() {
            var fileInput = document.getElementById('uploadFile');
            fileInput.click();

        };

        $scope.perfilesAsociados = [{
            name: 'GitHub',
            href: 'https://github.com/demo',
            icon: 'socicon-github'
        }, {
            name: 'GitLab',
            href: 'https://gitlab.geo.gob.bo/demo',
            icon: 'socicon-gitlab'
        }, {
            name: 'GIT',
            icon: 'socicon-stackoverflow'
        }, {
            name: 'Subversion',
            icon: 'socicon-stackoverflow'
        }, {
            name: 'Mercurial',
            icon: 'socicon-stackoverflow'
        }];

        $scope.unconnect = function(item) {
            item.href = undefined;
        };

        $scope.showModal = function(item) {
            $uibModal.open({
                animation: false,
                controller: 'ProfileModalCtrl',
                templateUrl: 'app/pages/profile/profileModal.html'
            }).result.then(function(link) {
                item.href = link;
            });
        };

        $scope.getFile = function() {
            fileReader.readAsDataUrl($scope.file, $scope)
                .then(function(result) {
                    $scope.picture = result;
                });
        };

        $scope.switches = [true, true, false, true, true, false];
    }

    function DesactivarCtrl($scope,$uibModalInstance,$http,$location) {
        $scope.link = '';
        $scope.si = function($link){
             var usuario2 = { "enabled": false,
                              "totp": false,
                              "emailVerified": true,}
            $http.put(urlKeycloak+$scope.usuario.keycloak_id,usuario2,{headers:{'Authorization':'Bearer '+$scope.usuario.token}}).then(function(){
                //$http.delete(urlCerrarSession+userSession,{headers:{'Authorization':'Bearer '+$scope.usuario.token}}).then(function(){
                    window.location.reload();
                //});
            });
            $uibModalInstance.close($scope.link);
            
            
        }

        $scope.no = function($link){
            $uibModalInstance.close($scope.link);            
        }
    }

})();