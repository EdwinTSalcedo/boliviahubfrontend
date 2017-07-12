(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.pages.dashboard')
        .controller('BlurFeedCtrl', BlurFeedCtrl);

    var urlBackend = 'https://test.adsib.gob.bo/api_backend/api/proyectos/?incluir=repositorio&atributos=repositorio.tipo';








    function BlurFeedCtrl($scope, $http) {
        var proyecto = {};
        $scope.proyectos = [];

        $scope.getProyectos = function() {
            $http.get(urlBackend).then(
                function(data) {
                    data = data.data;
                    if (data.datos) {
                        //$scope.proyectos = data.datos;
                        data.datos.forEach(function(proy) {

                            proyecto = {
                                tipo: 'gitlab',
                                nombre: proy.datos.nombre,
                                descripcion: proy.descripcion, //datos del autor
                                header: proy.datos.directorio, //titulo de text
                                text: proy.datos.grupo.name, //detalle para titulo
                                preview: 'app/feed/gitlab.png', //imagen repositorio
                                link: proy.urlRepositorio, //enlace de repositorio
                                creacion: proy.datos.fecha_creacion, //hora
                                ago: '', //fecha
                                expanded: false,
                                icono: proy.datos.icono,
                                commits: proy.datos.commits,
                                usuarios: proy.datos.usuarios,
                            };

                            //console.log(proyecto.tipo.tipo);
                            // console.log('*************************');
                            $scope.proyectos.push(proyecto);
                        })
                    }
                }
            ).catch(function(err) {
                console.log(err);
            });
        };
        $scope.getProyectos();

        $scope.expandMessage = function(message) {
            message.expanded = !message.expanded;
        }
    }
})();
