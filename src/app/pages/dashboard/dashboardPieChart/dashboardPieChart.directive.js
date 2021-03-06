/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BoliviaHubFrontend.pages.dashboard')
      .directive('dashboardPieChart', dashboardPieChart);

  /** @ngInject */
  function dashboardPieChart() {
    return {
      restrict: 'E',
      controller: 'DashboardPieChartCtrl',
      templateUrl: 'app/pages/dashboard/dashboardPieChart/dashboardPieChart.html'
    };
  }
})();