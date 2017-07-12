/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('BoliviaHubFrontend.pages.ui', [
    'BoliviaHubFrontend.pages.ui.typography',
    'BoliviaHubFrontend.pages.ui.buttons',
    'BoliviaHubFrontend.pages.ui.icons',
    'BoliviaHubFrontend.pages.ui.modals',
    'BoliviaHubFrontend.pages.ui.grid',
    'BoliviaHubFrontend.pages.ui.alerts',
    'BoliviaHubFrontend.pages.ui.progressBars',
    'BoliviaHubFrontend.pages.ui.notifications',
    'BoliviaHubFrontend.pages.ui.tabs',
    'BoliviaHubFrontend.pages.ui.slider',
    'BoliviaHubFrontend.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
