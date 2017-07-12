(function() {
    'use strict';

    var url = 'https://test.adsib.gob.bo/api_backend/api/usuarios/';
    var urlUsuario = 'https://test.adsib.gob.bo/api_backend/api/usuarios/?incluir=proyectos&atributos=proyectos.datos';

    angular.module('BoliviaHubFrontend.pages.usuarios')
        .controller('UsuariosPageCtrl', UsuariosPageCtrl)
        .controller('addUsuarioCtrl', addUsuarioCtrl)
        .controller('editUsuarioCtrl', editUsuarioCtrl)
        .directive('checkImage', function($q) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    attrs.$observe('ngSrc', function(ngSrc) {
                        var deferred = $q.defer();
                        var image = new Image();
                        var BASE_URL = '';
                        image.onerror = function() {
                            deferred.resolve(false);
                            element.attr('src', BASE_URL + 'assets/img/app/profile/avatar-user.png'); // set default image
                        };
                        image.onload = function() {
                            deferred.resolve(true);
                        };
                        image.src = ngSrc;
                        return deferred.promise;
                    });
                }
            };
        });


    /** @ngInject */
    function UsuariosPageCtrl($scope, fileReader, $filter, $uibModal, $http, $location) {
        $scope.campoBusqueda = 'nombre'; // Establecer el tipo de clasificación predeterminado
        $scope.ordenListado = false; // Establecer el orden de clasificación predeterminado
        $scope.terminoBusqueda = ''; // Establecer el término de búsqueda / filtro predeterminado
        $scope.registrosPorPagina = 10; //registros por página
        $scope.usuarios = [];
        $scope.usuariosProyecto = [];
       // $scope.usuariosProyecto.push({'_id':'1','nombre':'Ivan','email':'vantcfanel123@gmail.com','usuario':'Itancara','direccion':'Av. Tiahuanacu n255'});
        //$scope.usuariosProyecto.push({'_id':'2','nombre':'Elizabeth','email':'Ely@gmail.com','usuario':'Itancara','direccion':'Av. Tiahuanacu n255'});

        delete $http.defaults.headers.common['X-Requested-With'];
        $scope.getUsuarios = function() {
            $http.get(urlUsuario).then(
                function(data) {
                    var usuarioTemp = {};
                    usuarioTemp.tags = [];
                    usuarioTemp.commits = [];
                    data = data.data.datos;
                    if (data) {
                        $scope.usuarios = data;
                        //$scope.proyectos = data.datos;
                        data.forEach(function(dUsuario) {
                            var usuarioTemp = {};
                            var commitsTemp = [];
                            usuarioTemp.tags = [];
                            usuarioTemp.commits = [];
                            usuarioTemp = dUsuario;
                            usuarioTemp.commits = commitsTemp;
                            $scope.usuariosProyecto.push(usuarioTemp);
                        });
                    } else {
                        $scope.usuariosProyecto.push(usuarioTemp);
                    }
                } 
            ).catch(function(err) {
                console.log(err);
            });
        };
        $scope.getUsuarios();

        $scope.eliminar = function(_id, index){
            $scope.usuariosProyecto.splice(index,1);     
             $http.delete(urlUsuario+'/'+_id);
        }

        
    }




    /** @ngInject */
    function addUsuarioCtrl($scope, $http, $state,$location) {
      $scope.usuario = {"nombre":"","email":"","keycloak_id": "123456","estado": "true","telefono":"","ocupacion":""};
      $scope.addUsuario = function(){
        $scope.usuariosProyecto.push($scope.usuario);
        $http.post(urlUsuario,$scope.usuario);
        $location.url('/usuarios');
        
      }
    }

    function editUsuarioCtrl($scope, $stateParams, $http,$state, $location) {
        //http://192.168.1.178:8080/auth/realms/master/protocol/openid-connect/userinfo
     // $scope.usuario = organizaciones.usuariosProyecto[($stateParams.id).replace('-',' ')];
    //  console.log($scope.usuario);
      console.log($scope.usuariosProyecto);
      $scope.usuariosProyecto.forEach(function (usuario) {
        if(usuario.nombre == ($stateParams.id).replace('-',' ')){
            $scope.usuario = usuario;
        }
      });

      $scope.editUsuario = function(usuario){
          usuario.keycloak_id = '123456789';
           usuario.estado = true;
           $scope.usuariosProyecto[($stateParams.id).replace('-',' ')] = usuario;
           
           $http.put(urlUsuario+'/'+usuario._id,usuario);
           //$state.go('organizaciones.listar', {},{reload:true});
            $location.url('/usuarios');
        }
    }


})();
