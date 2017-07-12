(function() {
    'use strict';

    angular.module('BoliviaHubFrontend.pages', [
            'ui.router',
            'BoliviaHubFrontend.pages.dashboard',
            'BoliviaHubFrontend.pages.ui',
            'BoliviaHubFrontend.pages.components',
            'BoliviaHubFrontend.pages.form',
            'BoliviaHubFrontend.pages.tables',
            'BoliviaHubFrontend.pages.charts',
            'BoliviaHubFrontend.pages.profile',
            'BoliviaHubFrontend.pages.login',
            'BoliviaHubFrontend.pages.usuarios',
            'BoliviaHubFrontend.pages.personas',
            'BoliviaHubFrontend.pages.proyecto',
            'BoliviaHubFrontend.pages.organizaciones',
            'BoliviaHubFrontend.pages.proyectos',
            'BoliviaHubFrontend.pages.inicio',
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
        $urlRouterProvider.otherwise('/proyectos');

        baSidebarServiceProvider.addStaticItem({
            title: 'Pages',
            icon: 'ion-document',
            subMenu: [{
                title: 'Sign In',
                fixedHref: 'auth.html',
                blank: true
            }, {
                title: 'Sign Up',
                fixedHref: 'reg.html',
                blank: true
            }, {
                title: 'User Profile',
                stateRef: 'profile'
            }, {
                title: '404 Page',
                fixedHref: '404.html',
                blank: true
            }]
        });
        baSidebarServiceProvider.addStaticItem({
            title: 'Menu Level 1',
            icon: 'ion-ios-more',
            subMenu: [{
                title: 'Menu Level 1.1',
                disabled: true
            }, {
                title: 'Menu Level 1.2',
                subMenu: [{
                    title: 'Menu Level 1.2.1',
                    disabled: true
                }]
            }]
        });
    }

})();
