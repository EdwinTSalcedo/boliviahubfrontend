/**
 * @author v.degel
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BoliviaHubFrontend.pages.organizaciones')
      .directive('organizationPieChart', organizationPieChart);

  /** @ngInject */
  function organizationPieChart() {
    return {
      restrict: 'E',
      controller: 'OrganizationPieChartCtrl',
      templateUrl: 'app/pages/organizaciones/organizationPieChart/organizationPieChart.html'
    };
  }
})();