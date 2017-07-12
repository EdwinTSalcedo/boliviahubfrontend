/**
 * @author tnina@adsib.gob.bo
 * created on 07.04.2017
 */
(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.pages.usuarios', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('usuarios', {
                url: '/usuarios',
                title: 'usuarios',
                templateUrl: 'app/pages/usuarios/usuarios.html',
                controller: 'UsuariosPageCtrl',
            }).state('usuarios.listar', {
                url: "/",
                controller:'UsuariosPageCtrl',
                templateUrl: "app/pages/usuarios/usuarios.html",
                scope:{}
            })
            .state('usuarios.adicionar', {
                url: "/adicionarUsuario",
                controller:'addUsuarioCtrl',
                templateUrl: "app/pages/usuarios/adicionar.html",
                scope:{}
            })
            .state('usuarios.editar', {
                url: "/:id/editar",
                controller:'editUsuarioCtrl',
                templateUrl: "app/pages/usuarios/editar.html",
            });
    }

})();
