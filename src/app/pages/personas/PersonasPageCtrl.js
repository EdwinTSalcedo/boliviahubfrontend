/**
 * @author tnina@adsib.gob.bo
 * created on 07.04.2017
 */
(function() {
    'use strict';

    var url = 'https://test.adsib.gob.bo/api_backend/api/usuarios/';
    var urlUsuario = 'https://test.adsib.gob.bo/api_backend/api/usuarios/?incluir=proyectos&atributos=proyectos.datos';

    angular.module('BoliviaHubFrontend.pages.personas')
        .controller('PersonasPageCtrl', PersonasPageCtrl)
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
    function PersonasPageCtrl($scope, fileReader, $filter, $uibModal, $http) {
        $scope.campoBusqueda = 'nombre'; // Establecer el tipo de clasificación predeterminado
        $scope.ordenListado = false; // Establecer el orden de clasificación predeterminado
        $scope.terminoBusqueda = ''; // Establecer el término de búsqueda / filtro predeterminado
        $scope.registrosPorPagina = 2; //registros por página
        $scope.usuarios = [];
        $scope.usuariosProyecto = [];

        //delete $http.defaults.headers.common['X-Requested-With'];
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
                            if(dUsuario.proyectos.length > 0){
                                dUsuario.proyectos.forEach(function(proy) {
                                 usuarioTemp.tags = proy.datos.tags;                          
                                });

                            }
                            //console.log(dUsuario);
                            /*dUsuario.proyectos.datos.usuarios.forEach(function(proy) {
                                // console.log(proy.datos.commits);
                                usuarioTemp.tags = proy.datos.tags;
                                proy.datos.commits.forEach(function(commit) {
                                    commitsTemp.push(commit);
                                })

                            });*/
                            commitsTemp = dUsuario.datos.commits;
                            usuarioTemp.commits = commitsTemp;
                            //console.log(usuarioTemp);
                            //commitsTemp.push(dUsuario.commits);
                            
                            $scope.usuariosProyecto.push(usuarioTemp);
                            //console.log(usuarioTemp);
                        });
                        //console.log(data[1].proyectos[0].datos);
                        //console.log(data[0].proyectos[0].datos.commits.length);
                    } else {
                        $scope.usuariosProyecto.push(usuarioTemp);
                    }
                }
            ).catch(function(err) {
                console.log(err);
            });
        };
        $scope.getUsuarios();
        $scope.picture = $filter('profilePicture')('email');
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

})();