/**
 * @author tnina@adsib.gob.bo
 * created on 07.04.2017
 */
(function() {
    'use strict';

    var url = 'http://192.168.1.178:3000/api/usuarios/';
    var urlUsuario = 'http://192.168.1.178:3000/api/usuarios';

    angular.module('BoliviaHubFrontend.pages.proyectos')
        .controller('ProyectosPageCtrl', ProyectosPageCtrl)
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
    function ProyectosPageCtrl($scope, fileReader, $filter, $uibModal, $http, $location) {
        $scope.campoBusqueda = 'nombre'; // Establecer el tipo de clasificación predeterminado
        $scope.ordenListado = false; // Establecer el orden de clasificación predeterminado
        $scope.terminoBusqueda = ''; // Establecer el término de búsqueda / filtro predeterminado
        $scope.registrosPorPagina = 2; //registros por página
        $scope.proyectos = [];
        $scope.proyectosProyecto = [];

        //delete $http.defaults.headers.common['X-Requested-With'];
        $scope.getProyectos = function() {
            $http.get(urlProyecto).then(
                function(data) {
                    console.log(data.data);
                    var usuarioTemp = {};
                    usuarioTemp.tags = [];
                    usuarioTemp.commits = [];
                    data = data.data.rows;
                    if (data) {
                        $scope.proyectos = data;
                        //$scope.proyectos = data.datos;
                        data.forEach(function(dUsuario) {
                            var usuarioTemp = {};
                            var commitsTemp = [];
                            usuarioTemp.tags = [];
                            usuarioTemp.commits = [];
                            usuarioTemp = dUsuario;
                            usuarioTemp.commits = commitsTemp;
                            $scope.usuariosProyecto.push(usuarioTemp);
                            console.log(usuarioTemp);
                        });
                    } else {
                        $scope.usuariosProyecto.push(usuarioTemp);
                    }
                }
            ).catch(function(err) {
                console.log(err);
            });
        };
        $scope.getProyectos();
        
        $scope.addProyecto = function(item){
            $uibModal.open({
                animation: true,
                controller: 'addProyectoCtrl',
                templateUrl: 'app/pages/proyectos/adicionar.html'
            }).result.then(function(link) {
                item.href = link;
            });
        }
        

    
        $scope.editUser = function(usuario){
            console.log(usuario);
            //obtenemos el usuario a editar con routeParams
         /*  $scope.textButton = "Editar usuario";
            $scope.usuario = $scope.usuarios[$routeParams.id];
            $scope.editUser = function(){
                //actualizamos la información del usuario con la id que lleva $routeParams
                $scope.usuarios[$routeParams.id] = $scope.usuario;
                $location.url("/");
            }*/
        }



        $scope.deleteUser = function(usuarioId){
            console.log(usuarioId);
            console.log($location);
            
        }

        
    }


    /** @ngInject */
    function addController($scope, fileReader, $filter, $uibModal, $http, $location) {


    }



})();

