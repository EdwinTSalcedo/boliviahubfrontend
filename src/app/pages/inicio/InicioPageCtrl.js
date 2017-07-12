(function() {
    'use strict';

    //var urlBackend = 'http://192.168.1.171:3000/api/proyecto/';


    angular.module('BoliviaHubFrontend.pages.inicio')
        .controller('InicioPageCtrl', InicioPageCtrl);

    
    function InicioPageCtrl($scope, fileReader, $filter, $uibModal, $http, $rootScope) {
        console.log($rootScope.test);

        $scope.proyecto = {
            tipo: 'gitlab', 
            nombre: 'Bolivia Hub', 
            descripcion: 'Catalogo de proyectos de software libre creados por el estado', 
            header: 'Catalogo de proyectos de software libre creados por el estado', 
            link: 'https://gitlab.geo.gob.bo/portada_adsib', 
            creacion: '10/28/2010 a las 11:40PM', 
            icono: 'app/feed/gitlab.png',
            commits: 56, 
            usuarios: 7,
        };
    }

})();
